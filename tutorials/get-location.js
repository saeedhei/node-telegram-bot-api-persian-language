bot.onText(/getLocation/, (msg) => {
  const opts = {
    reply_markup: JSON.stringify({
      keyboard: [
        [{text: 'Location', request_location: true}],
        [{text: 'Contact', request_contact: true}],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    }),
  };
  bot.sendMessage(msg.chat.id, 'Contact and Location request', opts);
});

bot.on('location', (msg) => {
  console.log(msg.location.latitude);
  console.log(msg.location.longitude);
});

//END
//https://github.com/saeedhei
