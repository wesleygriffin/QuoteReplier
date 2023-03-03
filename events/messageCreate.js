const { Events } = require('discord.js')

module.exports = {
    name: Events.MessageCreate,
    async execute (message) {
        console.log(message)
        if (message.content.includes("fuck you")) {
            const channel = message.client.channels.cache.get(message.channelId);
            const user = message.author

            try {
                channel.send(`fuck you ${user.id}`) // FIXME: I think this needs to be '@${user.id}'
            } catch (error) {
                console.error('Error sending message')
                console.error(error)
            }
        }
    }
}
