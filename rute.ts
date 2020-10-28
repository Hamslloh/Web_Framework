import { Router } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { home, signup, saveuser, kategori } from "./controllers/blog.ts";

const router = new Router();

router
  .get("/", home)
  .get("/daftar", signup)
  .post("/save", saveuser)
  .get("/kategori/:id", kategori)
  .get("/about", (ctx) => {
    ctx.response.body = "Ini adalah Halaman About"
  });

export default router;