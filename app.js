const express = require("express");
const app = express();
const port = 3300;
const path = require("path");
const userModel = require("./models/userModel");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/read", async (req, res) => {
    let users = await userModel.find();
    res.render("read", { users });
});

app.post("/create", async (req, res) => {
    let { name, email, imageUrl } = req.body;
    let createUser = await userModel.create({
        name,
        email,
        imageUrl,
    });
    res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
    let users = await userModel.findOneAndDelete({ _id: req.params.id });
    res.redirect("/read");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
