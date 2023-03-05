const { SlashCommandBuilder } = require('discord.js')
const { Quotes } = require('../quotes.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('listquotes')
        .setDescription('list all quotes in the database'),
    async execute (interaction) {
        let quotes = await Quotes.findAll({ attributes: ['id', 'quote']})
        quotes = quotes.map(function(q){ return [q.id, q.quote].join(": ")})
        if (quotes.length > 0) {
            return interaction.reply(quotes.join('\n'))
        } else {
            return interaction.reply("No quotes.")
        }
    }
}
