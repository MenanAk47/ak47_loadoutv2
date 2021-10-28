ESX = nil
TriggerEvent(Config.SharedObjectName, function(obj) ESX = obj end)

RegisterServerEvent('ak47_loadoutv2:removeattachment')
AddEventHandler('ak47_loadoutv2:removeattachment', function(item)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    xPlayer.removeInventoryItem(item, 1)
end)

RegisterServerEvent('ak47_loadoutv2:addattachment')
AddEventHandler('ak47_loadoutv2:addattachment', function(item)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    xPlayer.addInventoryItem(item, 1)
end)