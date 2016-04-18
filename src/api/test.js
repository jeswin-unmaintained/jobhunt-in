export async function hello(ctx, id) {
  ctx.body = `Hello ${id}`;
}

export async function world(ctx) {
  ctx.body = `Hello World`;
}
