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

Upon initial launch, a `quotes.sqlite` database will be created. The `/addquote`, `/listquotes`, and `/removequote`
commands can be used to modify and query this database. The messageCreate event will look for a specific phrase  
and randomly select a quote to reply to the user with, replacing `USR_RPL` if provided in the quote.  
