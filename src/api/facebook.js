const YOUR_VERIFY_TOKEN = "ASD23FHFD234";

export async function webhook(ctx) {
  if (ctx.query['hub.verify_token'] === YOUR_VERIFY_TOKEN) {
    ctx.body = ctx.query['hub.challenge'];
  } else {
    ctx.body = 'Error, wrong validation token';
  }
}
