import { ApplicationCommand, Events } from "discord.js";

interface Command {
    data: ApplicationCommand;
    run: (...args: any) => any;
}

interface Event {
    name: typeof Events;
    type: "on" | "once";
    run: (...args: any) => any;
}