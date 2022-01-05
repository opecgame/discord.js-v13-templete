module.exports = async (client, interaction) => {
    if (interaction.isCommand()) {
        const cmd = client.commands.get(interaction.commandName)
        if (!cmd) return interaction.deferReply({
            ephemeral: true
        })
        console.log(`[LOGS] ${interaction.user.username} > /${interaction.commandName}`)
        cmd.run(client, interaction);
    }
}