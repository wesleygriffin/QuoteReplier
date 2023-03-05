const { SlashCommandBuilder } = require('discord.js')
const { Quotes } = require('../quotes.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('removequote')
        .setDescription('remove a quote to the database')
        .addIntegerOption(option =>
            option.setName('id')
                .setDescription('the id of the quote to remove.')
        ),
    async execute (interaction) {
        try {
            await Quotes.destroy({
                where: {
                    id: interaction.options.getInteger('id')
                }
            })
            return interaction.reply('Quote removed.')
        } catch (error) {
            return interaction.reply('Something went wrong removing the quote.')
        }
    }
}
