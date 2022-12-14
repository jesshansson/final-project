import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import games from "./data/games.json"
import crypto from "crypto"
import bcrypt from "bcrypt"
import { UserSchema } from "./Schemas/user"

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
    if (password.length < 8) {
      res.status(400).json({
        success: false,
        response: "Password must be at least 8 characters long"
      });
    } else {
      const newUser = await new User({ username: username, password: bcrypt.hashSync(password, salt) }).save();
      res.status(201).json({
        success: true,
        response: {
          username: newUser.username,
          accessToken: newUser.accessToken,
          id: newUser.id
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

const GameSchema = new mongoose.Schema({
  title: {
    type: String
  },
  developer: {
    type: String
  },
  publisher: {
    type: String
  },
  release_date: {
    type: String
  }
});

const Game = mongoose.model("Game", GameSchema);

if (true) {
  const resetDatabase = async () => {
    await Game.deleteMany();
    games.forEach(singleGame => {
      const newGame = new Game(singleGame);
      newGame.save();
    })
  }
  resetDatabase();
}

app.get("/", (req, res) => {
  res.send([
    { "test": "test" }
    // { "API": "NES-games library at /games" },
    // { "path": "/games", "url": 'https://project-auth-rrvntf6zcq-lz.a.run.app/games', "methods": ["GET"] }
  ]);
});

//app.get("/games", authenticateUser);
app.get("/games", async (req, res) => {
  const games = await Game.find({}).limit(10)
  res.status(200).json({ success: true, response: games })
});



// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigos!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
