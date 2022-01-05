const { Collection } = require("discord.js")
const { readdirSync } = require("fs")
module.exports = (client) => {
    try {
        client.commands = new Collection()
        client.commandArray = [];

        readdirSync("./commands/").forEach(folder => {
            readdirSync(`./commands/${folder}`).filter(file => file.endsWith(`.js`)).forEach(file => {
                const command = require(`../commands/${folder}/${file}`);
                try {
                client.commands.set(command.data.name, command)
                client.commandArray.push((command.data).toJSON())
                } catch(e){}
            })
        })

    } catch (e) {
        console.log(String(e.stack))
    }
}