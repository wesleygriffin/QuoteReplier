const { SlashCommandBuilder } = require('discord.js')
const { Quotes } = require('../quotes.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('listquotes')
        .setDescription('list all quotes in the database'),
    async execute (interaction) {
        let quotes = await Quotes.findAll({ attributes: ['id', 'quote'] })
        quotes = quotes.map(function (q) { return [q.id, q.quote].join(': ') })
        if (quotes.length > 0) {
            await interaction.reply(quotes.slice(0, 10).join('\n'))
            for (let i = 10; i < quotes.length; i += 10) {
                await interaction.followUp(quotes.slice(i, i + 10).join('\n'))
            }
        } else {
            return interaction.reply('No quotes.')
        }
    }
}
