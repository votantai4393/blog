import { utils } from "../utils.js";
import Post from "../models/Post.js";

class MeController {
  // [get] http://localhost:3000/me/posts
  postStorage(req, res, next) {
    Promise.all([
      Post.find({ deleted: false }),
      Post.countDocuments({ deleted: true }),
    ])
      .then(([posts, amountPostInTrash]) => {
        posts = utils.parseMongoose(posts);
        posts = utils.formatDate(posts);
        res.render("me/posts", {
          posts,
          amountPostInTrash,
        });
      })
      .catch(next);
  }

  // [get] http://localhost:3000/me/trash
  trashStorage(req, res, next) {
    Post.find({ deleted: true })
      .then((posts) => {
        posts = utils.parseMongoose(posts);
        posts = utils.formatDate(posts);
        res.render("me/trash", {
          posts,
        });
      })
      .catch(next);
  }
}

export default new MeController();
