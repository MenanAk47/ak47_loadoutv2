ESX = nil
Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent(Config.SharedObjectName, function(obj) ESX = obj end)
        Citizen.Wait(0)
    end
end)

RegisterNetEvent('ak47_loadoutv2:notify')
AddEventHandler('ak47_loadoutv2:notify', function(msg)
    ESX.ShowNotification(msg)
end)

function closeUI()
    menuactive = false
    SetNuiFocus(false, false)
    SendNUIMessage({hidemenu = true})
end

RegisterCommand('attachment',function()
	openMenu()
end)

RegisterKeyMapping("attachment", "Attachment Menu", "keyboard", "L")

RegisterNUICallback(
    "remove",
    function(data)
        ExecuteCommand(data.command)
    end
)

RegisterNUICallback(
    "close",
    function(data)
        SetNuiFocus(false, false)
    end
)