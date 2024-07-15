const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf('7031843318:AAH5myyTpQZUoRPRhioaa-fQ9_RY0DKc1Es')
bot.start((ctx) => ctx.reply('Welcome', {
    reply_markup: {
        keyboard: [[{
            text: "web app",
            web_app: {url: 'https://vvardges.github.io/tg-test-bot/'}
        }]]
    }
}));
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))