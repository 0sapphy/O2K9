const { Events } = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,
    type: "on",

    /**
     * @param {import("discord.js").Interaction} interaction 
     */
    run: (interaction) => {
        const { client } = interaction;

        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return;
            command.run(interaction);
        }
    }
}