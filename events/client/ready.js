const config = require("../../config")
module.exports = async (client) => {
    // console.log(client)
    console.log(`[LOGS] ${client.user.username} Ready !`)
    if(config.pushcommands === true){
        console.log(`[Logs]`.gray + ` Push commands to "${config.loadSlashsGlobal? `Public`:`Guild`}!"`.green)
        if (config.loadSlashsGlobal) {
            client.application.commands.set(client.commandArray)
        } else {
            client.guilds.cache.map(g => g).forEach(async (guild) => {
                try {
                    guild.commands?.cache.map(command => guild.commands.delete(command.id))
                    guild.commands?.set(client.commandArray)
                } catch (e) {
                    console.log((e))
                }
            });
        }
    }else{
        console.log(`[Logs]`.gray + ` command not push to public or any guild`.red)
    }
}