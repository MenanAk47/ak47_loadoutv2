resource_manifest_version '44febabe-d386-4d18-afbe-5e627f4af937'

description 'Ak47 Weapon Accessories V2'

ui_page 'html/form.html'

files {
	'html/form.html',
	'html/img/*.png',
	'html/*.css',
	'html/*.js',
}

server_scripts {
	'@mysql-async/lib/MySQL.lua',
	'locales/en.lua',
    'config.lua',
    'server/utils.lua',
    'server/loader.lua',
}

client_scripts {
	'locales/en.lua',
	'config.lua',
    'client/utils.lua',
    'client/loader.lua',
}
