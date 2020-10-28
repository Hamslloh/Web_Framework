import { Application, send } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import router from "./rute.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}`
  });
});

console.log("Application Sedang Berlangsung")
await app.listen({ port: 8000 });