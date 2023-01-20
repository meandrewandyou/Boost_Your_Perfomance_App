import { Router } from "express";
import User from "../models/user.js";
import checkUniqueUser from "../middleware/checkUniqueUser.js";
import Project from "../models/project.js";
import ifUserExists from "../middleware/ifUserExists.js";

const router = Router();

router.post("/register", checkUniqueUser, async (req, res) => {
  try {
    const user = await User.create(req.body);
    user &&
      res.status(200).send("You have been registered! Feel free to log in!");
  } catch (err) {
    console.log(err);
    if (err.name === "ValidationError") {
      res.status(400).send(err.message.split(":")[2]);
    } else {
      res
        .status(400)
        .send("Oops! Something went wrong! Please try again later.");
    }
  }
});

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const foundUser = await User.findOne({ userName });
    if (foundUser) {
      foundUser.password === password
        ? res.status(200).send({
            userName: foundUser.userName,
            email: foundUser.email,
            projects: foundUser.projects,
            totalWorkTime: foundUser.totalWorkTime,
          })
        : res.status(403).send("Wrong password");
    } else {
      res.status(403).send("No user with such username was found");
    }
  } catch (err) {
    res.status(400).send("Oops! Something went wrong! Please try again later.");
  }
});

router.post("/addProject", ifUserExists, async (req, res) => {
  try {
    const newProject = await Project.create(req.body.project);
    if (newProject) {
      req.user.projects.push(newProject);
      await req.user.save();
      res.send(
        req.user.projects.sort((a, b) => {
          return b.createdAt - a.createdAt;
        })
      );
    }
  } catch (err) {
    res.status(400).send("Something's not right here(");
  }
});

router.post("/addGoal", ifUserExists, (req, res) => {});

export default router;
