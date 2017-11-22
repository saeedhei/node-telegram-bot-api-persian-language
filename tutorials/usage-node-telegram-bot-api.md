## Usage


<p dir='rtl' align='right'>
ابتدا یک فایل جاوا اسکریپت در مسیر پروژه خود بسازید و دستور زیر را در مربوط به فراخوانی ماژول می باشد را در آن اضافه نمائید.
</p>
   
```js
const TelegramBot = require('node-telegram-bot-api');
```

<p dir='rtl' align='right'>
سپس توکنی که از بات فادر دریافت نمودید را در دستور زیر وارد نمائید
</p>  
   
```js
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
```
<p dir='rtl' align='right'>
و در انتها با این دستور یک ربات جدید بسازید.
</p> 
   
```js
const bot = new TelegramBot(token, {polling: true});
```



