export const utils = {
  parseMongoose: (data) =>
    Array.isArray(data)
      ? data.map((element) => element.toObject())
      : data
      ? data.toObject()
      : data,
  subFormatDate: (post) => {
    const date = new Date(post?.createdAt);
    const dateDeleted = new Date(post?.deletedAt);
    post.deletedAt =
      post.deletedAt &&
      `${dateDeleted.getDate()}/${
        dateDeleted.getMonth() + 1
      }/${dateDeleted.getFullYear()}`;
    post.createdAt = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    return post;
  },
  formatDate: (data) =>
    Array.isArray(data)
      ? data.map((element) => utils.subFormatDate(element))
      : data
      ? utils.subFormatDate(data)
      : data,
};
