import siteRouter from "./site.js";
import postsRouter from "./posts.js";
import meRouter from "./me.js";

function router(app) {
  app.use("/me", meRouter);
  app.use("/posts", postsRouter);
  app.use("/", siteRouter);
}

export default router;
