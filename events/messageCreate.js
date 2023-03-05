const { Events } = require('discord.js')
const { clientId, triggerPhrase } = require('../config.json')
const { Quotes } = require('../quotes.js')

function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

module.exports = {
    name: Events.MessageCreate,
    async execute (message) {
        console.log(message)
        if (message.content.includes(`${triggerPhrase} <@${clientId}>`)) {
            const channel = message.client.channels.cache.get(message.channelId)
            const user = message.author

            try {
                let quotes = await Quotes.findAll({ attributes: ['quote']})
                quotes = quotes.map(q => q.quote)
                let response = quotes[between(0, quotes.length)]
                response = response.replace('USR_RPL', `<@${user.id}>`)
                channel.send(response)
            } catch (error) {
                console.error('Error sending message')
                console.error(error)
            }
        }
    }
}
