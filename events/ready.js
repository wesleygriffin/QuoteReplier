const { Events } = require('discord.js')
const { Quotes } = require('../quotes.js')

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute (client) {
        console.log('syncing quotes')
        Quotes.sync()
        console.log(`Ready! Logged in as ${client.user.tag}`)
    }
}
