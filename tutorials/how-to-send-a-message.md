## How to Send/Receive a Message

<p dir='rtl' align='right'>
برای ارسال و در یافت پیام می توان از دستورات زیر استفاده نمود
</p>

```
// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});
```

# مثال

```
bot.onText(/\/start/, (msg) => {

    const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup: JSON.stringify({
            keyboard: [[A,B,C]],
        })
    };
    bot.sendMessage(msg.chat.id, `سلام به ربات خوش آمدید.`, opts);
});
```