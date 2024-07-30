import express from "express"
import cors from "cors"
import ImageKit from "imagekit";
import mongoose from "mongoose";
import UserChats from "./models/userChats.js";
import Chat from "./models/chat.js";
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))

app.use(express.json())

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB")
    } catch (err) {
        console.log(err)
    }
}

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
});

app.get("/api/upload", (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

// app.get("/api/test", ClerkExpressRequireAuth(),(req, res)=> {
//     const userId = req.auth.userId;
//     console.log(userId)
//     res.send("Success")
// })

app.post("/api/chats", ClerkExpressRequireAuth(), async (req, res) => {
    const userId = req.auth.userId;
    const { text } = req.body
    try {

        const newChat = new Chat({
            userId: userId,
            history: [{
                role: "user",
                parts: [{ text }]
            }],
        })

        const savedChat = await newChat.save();

        const userChats = await UserChats.find({ userId: userId });

        if (!userChats.length) {
            const newUserChats = new UserChats({
                userId: userId,
                chats: [
                    {
                        _id: savedChat._id,
                        title: text.substring(0, 40),

                    }
                ]
            })
            await newUserChats.save()
        } else {
            await UserChats.updateOne({ userId: userId }, {
                $push: {
                    chats: {
                        _id: savedChat._id,
                        title: text.substring(0, 40),
                    }
                }
            })
            res.status(201).send(newChat._id);
        }

    } catch (err) {
        console.log(err)
        res.status(500).send("Error creating Chat!!")
    }
})

app.get("/api/userchats", ClerkExpressRequireAuth(), async (req, res) => {
    const userId = req.auth.userId;
    try {
        const userChats = await UserChats.find({userId});
        res.status(200).send(userChats[0].chats);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching Userchats!!");
    }
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(401).send('Unauthenticated!');
});

app.listen(port, () => {
    connect()
    console.log("Server running on 3000");
})