const Discord = require("discord.js");
const color = require("colors")
const config = require("./config")
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_BANS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_INVITES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "GUILD_PRESENCES",
        "GUILD_VOICE_STATES",
        "GUILD_WEBHOOKS",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING"
    ],
    partials: [
        "CHANNEL",
        "REACTION",
        "MESSAGE",
    ]
});

["event","command"].forEach(handler => {
    require(`./handlers/${handler}`)(client)
})

client.login(config.token)

module.exports = client