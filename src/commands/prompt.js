const { SlashCommandBuilder, InteractionContextType, MessageFlags } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("prompt")
    .setDescription("Build your user profile!")
    .setContexts(InteractionContextType.Guild),

    /**
     * @param {import("discord.js").ChatInputCommandInteraction} interaction 
     */
    run: (interaction) => {
        interaction.reply({ content: "PROMPT", flags: [MessageFlags.Ephemeral] })
    }
}