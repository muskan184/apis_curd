const User = require("../model/user");

async function handlGetAllUser(req, res) {
  const alldbUser = await User.find({});
  return res.json(alldbUser);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json(user);
}

async function handleUpdateById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "chaneged" });
  res.json({ status: "success" });
}

async function handleDeleteByid(req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.json({ status: "success" });
}

async function handleCreateUser(req, res) {
  let body = req.body;
  let result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    ipAddress: body.ip_address,
  });
  return res.status(201).json({ msg: "success", id: result._id });
}
module.exports = {
  handlGetAllUser,
  handleGetUserById,
  handleUpdateById,
  handleDeleteByid,
  handleCreateUser,
};
