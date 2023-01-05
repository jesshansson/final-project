import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto"
import bcrypt from "bcrypt"
import { UserSchema } from "./Schemas/user"
import { NatureSchema } from "./Schemas/nature";
import { CultureSchema } from "./Schemas/culture";
import listEndpoints from "express-list-endpoints";
import culture from "./data/culture.json";
import nature from "./data/nature.json"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());


const User = mongoose.model("User", UserSchema);
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync();
    if (password.length < 5) {
      res.status(400).json({
        success: false,
        response: "Password must be at least 5 characters long"
      });
    } else {
      const newUser = await new User({ username: username, password: bcrypt.hashSync(password, salt) }).save();
      res.status(201).json({
        success: true,
        response: {
          username: newUser.username,
          accessToken: newUser.accessToken,
          id: newUser.id //_id eller id?
        }
      });
    }
  }
  catch (error) {
    res.status(400).json({
      success: false,
      response: "Username is already registered"
    });
  }
});


const Nature = mongoose.model("Nature", NatureSchema);
const Culture = mongoose.model("Culture", CultureSchema)

 if (true) {
   const resetDatabase = async () => {
     await Culture.deleteMany();
    culture.forEach(singleCulture => {
      const newCulture = new Culture(singleCulture);
     newCulture.save()
    })
    await Nature.deleteMany();
    nature.forEach(singleNature => {
      const newNature = new Nature(singleNature)
      newNature.save()    
    })
   }
   resetDatabase();
 }

//Register new user
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      res.status(400).json({
        success: false,
        response: "Password must be at least 5 characters long"
      });
    } else {
      const newUser = await new User({ username: username, password: bcrypt.hashSync(password, salt) }).save();
      res.status(201).json({
        success: true,
        response: {
          username: newUser.username,
          accessToken: newUser.accessToken,
          id: newUser._id
        }
      });
    }
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        success: false,
        response: 'Username already in use',
      });
    } else {
      res.status(400).json({
        success: false,
        response: error
      });
    }
  }
});

//Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        response: {
          username: user.username,
          id: user.id,
          accessToken: user.accessToken
        }
      });
    } else {
      res.status(400).json({
        success: false,
        response: "Credentials didn't match"
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error
    });
  }
});

/*
// Authenticated endpoint - accesible after logged in
const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  try {
    const user = await User.findOne({ accessToken: accessToken });
    if (user) {
      next()
    } else {
      res.status(401).json({
        response: "Please log in",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      response: error,
      success: false
    });
  }
}

// When user is authenticated they are directed to this endpoint
app.get("/locations", authenticateUser)
app.get("/locations", (req, res) => {
  res.status(200).json({
    sucess: true,
    response: "Welcome, you are now logged in!"
  })
})*/


app.get("/", (req, res) => {
  res.send([
    { "test": "test" }
  ]);
});

// list endpoints for all routers that is created in this file. 
app.get("/endpoints", (req, res) => {
  res.send(listEndpoints(app))
})

app.get("/locations", async (req, res) => {
  const nature = await Nature.find({})
  const culture = await Culture.find({})
  res.status(200).json({ success: true, response: { culture, nature } })
});

app.get("/locations/:id", async (req, res) => {
  try {
    const singleLocationNature = await Nature.findById({ _id: req.params.id }) //id eller _id?
    const singleLocationCulture = await Culture.findById({ _id: req.params.id }) //id eller _id?
    if (singleLocationCulture || singleLocationNature) {
      res.status(200).json({
        success: true,
        response: singleLocationCulture || singleLocationNature
      })
    } else {
      res.status(404).json({
        success: false,
        response: "No such location"
      })
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      response: "Invalid"
    })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
