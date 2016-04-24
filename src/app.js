import __babelPolyfill from "babel-polyfill";
import paddock from "yak-ai-paddock";

const VERIFY_TOKEN = "exsbfbbizbyelqil";
const PAGE_ACCESS_TOKEN = "CAADchQHUJC4BAFGQaAQZBipFkgnW8ZBWy0ZAEFBdJC2OGLvmjuuqj1rEoWu1i5F2S6g2GVvyvhgkUlV0gQU7I4jFjwgkNZCI89" +
  "NzJUPEoZBXC7cMRGiUtmZCyl4t4EqdeLKR8i55FCIwZBnQAYCe6MtrOAMu1IYamjASsrFJ83dXHJZBCeWP0mJPkRvhZB6lZAeZBuROswqgjAz3QZDZD";

const config = {
  yak: {},
  facebook: {
    verifyToken: VERIFY_TOKEN,
    pageAccessToken: PAGE_ACCESS_TOKEN,
    getResponse: async (input) => {
      return {
        message: {
          text: `Heard you say ${input.message.text}`
        }
      }
    }
  },
  port: 9001
}

paddock(config);
