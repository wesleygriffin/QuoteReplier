# QuoteReplier

A discord bot that will reply to mentions with random quotes.

Based on the [discord.js Guide](https://discordjs.guide/).  

Application credentials must be provided at a top level `config.json` file. This is git ignored. Do not check  
your credentials into github. Also provide the trigger string to go along with the bot's client id.  

Example:

```json
{
  "token": "do not check this in",
  "clientId": "do not check this in",
  "guildId": "do not check this in",
  "triggerPhrase": "phrase to hit on"
}
```

Add an array json file at the top level called `quotes.json`. The messageCreate event will look for a specific phrase  
and randomly select a quote to reply to the user with, replacing `USR_RPL` if provided in the quote.  

## TODO

- Add a [database](https://discordjs.guide/sequelize/#installing-and-using-sequelize)
- Add a /command to add quotes to the database