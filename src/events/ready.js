const { Routes } = require("discord.js")

module.exports = {
    name: "ready",
    type: "once",

    /**
     * @param {import("discord.js").Client} client 
     */
    run: (client) => {
        console.info(`${client.user.username} ready!`)

        // Deploy
        client.rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
            body: client.command_data
        });
    }
}