const yakImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bos_grunniens_at_Letdar_on_Annapurna_Circuit.jpg/1280px-Bos_grunniens_at_Letdar_on_Annapurna_Circuit.jpg";

const html = `
<html>
  <body style="padding:3em; width: 600px">
    <h1>What's up?</h1>
    <p>
      <img src="${yakImage}" alt="yak" style="width:100%" />
    </p>
  </body>
</html>
`;

export async function index(ctx) {
  ctx.body = html;
}
