const express = require("express");
const {
  handlGetAllUser,
  handleGetUserById,
  handleUpdateById,
  handleDeleteByid,
  handleCreateUser,
} = require("../controllers/user");

const route = express.Router();

route.route("/").get(handlGetAllUser).post(handleCreateUser);

// route.get("/users", async (req, res) => {
//   const alldbUser = await User.find({});
//   const html = `<ul> ${alldbUser
//     .map((user) => `<li>${user.firstName}</li.>`)
//     .join("")}</ul>`;
//   res.send(html);
// });

route
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateById)
  .delete(handleDeleteByid);

module.exports = route;
