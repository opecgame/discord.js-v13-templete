const {
    SlashCommandBuilder
} = require("@discordjs/builders");
const discord = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`ping`)
        .setDescription(`Example Code | Pekky`),
    admin: true,
    async run(client, interaction, userdata, guilddata) {
        return interaction.reply({
            embeds: [new discord.MessageEmbed()
                .setColor("RANDOM")
                .setFooter(client.user.username , client.user.displayAvatarURL())
                .setTitle(`Pong !`)
            ], ephemeral: true
        });
    }
}