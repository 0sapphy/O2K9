process.loadEnvFile(".env");
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("node:fs");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.command_data = [];
client.commands = new Collection();

for (const file of fs.readdirSync("./src/events/")) {
    const event = require(`./events/${file}`);
    /** @type {import("../types/index").Event} */
    const { name, type, run } = event;
    client[type](name, (...args) => run(...args));
}

for (const file of fs.readdirSync("./src/commands/")) {
    /** @type {import("../types/index").Command} */
    const command = require(`./commands/${file}`)
    client.command_data.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}

client.login(process.env.DISCORD_TOKEN);