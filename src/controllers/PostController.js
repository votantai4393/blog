import { utils } from "../utils.js";
import Post from "../models/Post.js";

class PostController {
  // [get] http://localhost:3000/posts/:id
  detail(req, res, next) {
    Post.findById(req.params.id)
      .then((post) =>
        res.render("posts/detail", { post: utils.parseMongoose(post) })
      )
      .catch(next);
  }

  // [get] http://localhost:3000/posts/form-create
  createForm(req, res, next) {
    res.render("posts/create-form");
  }

  // [get] http://localhost:3000/posts/:id/edit
  updateForm(req, res, next) {
    Post.findById(req.params.id)
      .then((post) =>
        res.render("posts/update-form", { post: utils.parseMongoose(post) })
      )
      .catch(next);
  }

  // [post] http://localhost:3000/posts/create-post
  create(req, res, next) {
    new Post(req.body)
      .save()
      .then(() => res.redirect("/me/posts"))
      .catch(next);
  }

  // [put] http://localhost:3000/posts/:id/update
  update(req, res, next) {
    Post.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect("/me/posts"))
      .catch(next);
  }

  // [delete] http://localhost:3000/posts/:id/delete
  delete(req, res, next) {
    Post.updateOne(
      { _id: req.params.id },
      { $set: { deleted: true, deletedAt: new Date() } }
    )
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [patch] http://localhost:3000/posts/:id/restore
  restore(req, res, next) {
    Post.updateOne(
      { _id: req.params.id },
      { $set: { deleted: false, deletedAt: null } }
    )
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [delete] http://localhost:300/posts/:id/forceDelete
  forceDelete(req, res, next) {
    Post.findByIdAndRemove(req.params.id)
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

export default new PostController();
