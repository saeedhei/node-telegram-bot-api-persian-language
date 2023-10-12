## تنظیم پروکسی

<p dir='rtl' align='right'>
برای تنظیم پروکسی از نمونه کد زیر استفاده کنید:
</p>

```js
const bot = new TelegramBot(token, {
  polling: true,
  request: {
    proxy: "http://127.0.0.1:1234",
  },
});
```

<p dir='rtl' align='right'>
پارامترهای بیشتری که می‌توانید در request تنظیم کنید را از اینجا ببینید:
</p>

<https://github.com/request/request#requestoptions-callback>

<p dir='rtl' align='right'>
در غیر این صورت، اگر از وب‌هوک استفاده می‌کنید، به اینجا سر بزنید:
</p>

<https://github.com/yagop/node-telegram-bot-api/issues/253>

[Updated by @NabiKAZ](https://github.com/NabiKAZ)

