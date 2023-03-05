const { SlashCommandBuilder } = require('discord.js')
const { Quotes } = require('../quotes.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addquote')
        .setDescription('add a quote to the database')
        .addStringOption(option =>
            option.setName('quote')
                .setDescription('the quote to add.')),
    async execute (interaction) {
        console.log(`quote: "${interaction.options.getString('quote')}"`)
        try {
            await Quotes.create({ quote: interaction.options.getString('quote') })
            return interaction.reply('Quote added.')
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                return interaction.reply('That quote already exists')
            }

            return interaction.reply('Something went wrong adding the quote.')
        }
    }
}
