const path = require('node:path')
const { Client, Collection, GatewayIntentBits } = require('discord.js')
const { token } = require('./config.json')
const { loadFiles } = require('./utility.js')

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] })
client.commands = new Collection()

loadFiles(path.join(__dirname, 'commands'), file => file.endsWith('.js'), (filePath, command) => {
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command)
        console.log(`Added command ${command.data.name} from ${filePath}`)
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property`)
    }
})

loadFiles(path.join(__dirname, 'events'), file => file.endsWith('.js'), (filePath, event) => {
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args))
    } else {
        client.on(event.name, (...args) => event.execute(...args))
    }
})

client.login(token)
