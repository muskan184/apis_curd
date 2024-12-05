app.use((req, res, next) => {
  console.log("middlewsre 1");
  next();
});

app.get("/user", (req, res) => {
  return res.json(data);
});

app.get("/users", async (req, res) => {
  const alldbUser = await User.findOne({});
  const html = `<ul> ${alldbUser.map(
    (user) => `<li>${user.firstName}</li>`
  )}</ul>`;
  res.send(html);
});

app
  .route("/user/name/:id")
  .get((req, res) => {
    const user_id = Number(req.params.id);
    const user = data.find((user) => user.id === user_id);
    return res.json(user);
  })
  .put((req, res) => {
    res.json({ status: "pending" });
  })

  .delete((req, res) => {
    res.json({ status: "pending" });
  });