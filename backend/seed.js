const users = require("./data/db.users.json");
const posts = require("./data/db.posts.json");
const categories = require("./data/db.category.json");
const comments = require("./data/db.comments.json");
const { UserModel } = require("./app/models/user");
const { PostModel } = require("./app/models/post");
const { CommentModel } = require("./app/models/comment");
const { CategoryModel } = require("./app/models/category");
const mongoose = require("mongoose");

(async () => {
  await mongoose.connect("mongodb://localhost:27017/next-blog-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await UserModel.deleteMany({});
  await PostModel.deleteMany({});
  await CommentModel.deleteMany({});
  await CategoryModel.deleteMany({});
  await UserModel.insertMany(users);
  await PostModel.insertMany(posts);
  await CommentModel.insertMany(comments);
  await CategoryModel.insertMany(categories);

  await mongoose.disconnect();
})()
  .then(() => {
    console.log("DATA INSERTED SUCCESSFULLY.");
    console.log("NOW RUN npm run dev AND TEST THE APIs");
  })
  .catch((err) => console.log("DATA INSERTION FAILED: ", err));
