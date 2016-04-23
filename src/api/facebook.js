import request from "request-promise";

const YOUR_VERIFY_TOKEN = "exsbfbbizbyelqil";
const PAGE_ACCESS_TOKEN = "CAADchQHUJC4BAFGQaAQZBipFkgnW8ZBWy0ZAEFBdJC2OGLvmjuuqj1rEoWu1i5F2S6g2GVvyvhgkUlV0gQU7I4jFjwgkNZCI89" +
  "NzJUPEoZBXC7cMRGiUtmZCyl4t4EqdeLKR8i55FCIwZBnQAYCe6MtrOAMu1IYamjASsrFJ83dXHJZBCeWP0mJPkRvhZB6lZAeZBuROswqgjAz3QZDZD";

export async function webhook_get(ctx) {
  if (ctx.query['hub.verify_token'] === YOUR_VERIFY_TOKEN) {
    ctx.body = ctx.query['hub.challenge'];
  } else {
    ctx.body = 'Error, wrong validation token';
  }
}

export async function webhook_post(ctx) {
  const messaging_events = ctx.request.body.entry[0].messaging;

  for (let i = 0; i < messaging_events.length; i++) {
    const event = messaging_events[i];
    const sender = event.sender.id;
    if (event.message && event.message.text) {
      const text = event.message.text;
      const options = {
        method: 'POST',
        qs: {access_token: PAGE_ACCESS_TOKEN},
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        body: {
          recipient: {id: sender},
          message: {
            text: `I am going to echo what you said: ${text}`
          }
        },
        json: true // Automatically stringifies the body to JSON
      };
      request(options);
    }
  }
  ctx.status = 200;
}
