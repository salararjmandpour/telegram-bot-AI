const Telegraf = require("telegraf");
const Bot_Token = '5851753024:AAHKxSlnJpgGVypkytOuhvdaV942kfd1Gjg';

const Bot = new Telegraf(Bot_Token);


// method use

Bot.use((ctx ,next) => {
    ctx.reply("Your used the bot"); 
    ctx.state.SALAR = "I am Test Bot";
    next(ctx);
});

Bot.start((ctx) => {
    ctx.reply(ctx.from.first_name + ' : ' + 'Bot Started');
    ctx.reply(ctx.state.SALAR);
});

Bot.help((ctx) => {
    ctx.reply('Send me a sticker');
});

Bot.settings((ctx) => {
    ctx.reply('Setting...');
});


const Test = ['TEST', 'Test', 'test'];

Bot.command(Test, (ctx) => {
    ctx.reply('Hello salAr :)');
});


const Hello = ['hello', 'hi', 'Hello', 'Hi', 'salam', 'Salam'];

Bot.hears(Hello, (ctx) => {
    ctx.reply("Hello (:" + " " + ctx.from.first_name);
});


Bot.on('text', (ctx) => {
    ctx.reply('this is a text message !');
});

Bot.on('sticker', (ctx) => {
    ctx.reply("This is a sticker message !");
});


//handles eg. +98 922 158-1237 or (922) 158-1237
Bot.phone("+989221581237", (ctx) => {
    ctx.reply('Phone number method !');
});

//handles eg. #bill
Bot.hashtag("bill", (ctx) => {
    ctx.reply("Hashtag method !");
});

//handles eg. @botfather
Bot.mention("botfather", (ctx) => {
    ctx.reply('Mention method !');
});




Bot.launch();