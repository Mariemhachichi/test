//mot de passe :0oJZQCAq2mYuSgen
//Create server
const express = require("express")
const app = express()
app.use(express.json())

app.listen("3001", () => {
    console.log("server work!!")
})

const cors = require("cors")
app.use(cors())

//connect BD
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://hachichimariemsimplonenda:0oJZQCAq2mYuSgen@cluster0.4qgdhvp.mongodb.net/mariem")


//import user model
const UserModel = require("./models/User")

//Get
app.get("/user", async (req, res) => {
    const users = await UserModel.find();
    res.json(users)
})

//Post
app.post("/Create", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()

    res.json(user)
})