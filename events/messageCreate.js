const { Events } = require('discord.js')
const { clientId, triggerPhrase } = require('../config.json')
const responses = require('../quotes.json')

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
                let response = responses[between(0, responses.length)]
                response = response.replace('USR_RPL', `<@${user.id}>`)
                channel.send(response)
            } catch (error) {
                console.error('Error sending message')
                console.error(error)
            }
        }
    }
}
