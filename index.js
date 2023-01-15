const Discord = require("discord.js")
require("dotenv").config()

// const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client, 
    prefix: "n.",
    owners: ["683914336376455200"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.slashcommands = new Discord.Collection()
client.buttons = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadButtons = (bot, reload) => require("./handlers/buttons")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)
client.loadSlashCommands(bot, false)
client.loadButtons(bot, false)


module.exports = bot

// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}`)
// })

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "ping"){
        message.reply("pong!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "cs1asched"){
        message.reply("https://cdn.discordapp.com/attachments/1018057172711653437/1063708350073806858/CS1A_Sched.png")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "is1asched"){
        message.reply("https://media.discordapp.net/attachments/1008642078592471084/1034046317158215751/issched.png?width=610&height=597")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "it1asched"){
        message.reply("https://media.discordapp.net/attachments/1034063578333990962/1034071467832389703/BSIT_1A_NORTH.jpg?width=379&height=490")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "vods 1st sem"){
        message.reply("https://youtube.com/playlist?list=PL-EDcGHq7b9wUdGrWmFjD7vtCxNmDePdC")
    }
})

// When I started writing this, only God and I understood what I was doing
// Now, only God knows
client.on("messageCreate", (message) => {
    if (message.content == "r1"){
        message.reply("<@&1011206648129409107>, ${user} is recording...")
        message.mentions.members
        message.mentions.members.first().toString()
        message.reply("<@&1011206648129409107>, ${person.user} is recording...")
        message.guild.members.cache.get() 
        `<@${member.id}>`
    }
})

// const welcomeChannelId = "1052346489017466900"

// client.on("guildMemberAdd", async (member) => {
//     const img = await generateImage(member)
//     member.guild.channels.cache.get(welcomeChannelId).send({
//         content: `<@${member.id}> Welcome to the server!`,
//         files: [img]
//     })
// })

client.login(process.env.TOKEN)