import { utils } from "../utils.js";
import Post from "../models/Post.js";

class SiteController {
  // [get] http://localhost:3000
  indexPage(req, res, next) {
    Post.find({ deleted: false })
      .then((posts) =>
        res.render("home", { posts: utils.parseMongoose(posts) })
      )
      .catch(next);
  }
}

export default new SiteController();
