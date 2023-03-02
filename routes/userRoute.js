import { Router } from "express";
import User from "../models/user.js";
import checkUniqueUser from "../middleware/checkUniqueUser.js";
import Project from "../models/project.js";
import verifyUser from "../middleware/verifyUser.js";
import ifProjectIsUnique from "../middleware/ifProjectIsUnique.js";
import ifGoalIsUnique from "../middleware/ifGoalIsInuque.js";
import Goal from "../models/goal.js";
import getProjectIndex from "../middleware/getProjectIndex.js";
import getGoalIndex from "../middleware/getGoalIndex.js";

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

router.post("/addProject", verifyUser, ifProjectIsUnique, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body.project,
      userId: req.user._id,
    });
    if (newProject) {
      req.user.projects.push(newProject);
      await req.user.save();
      res.send(req.user.projects);
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Something's not right here(");
  }
});

router.post("/addGoal", verifyUser, ifGoalIsUnique, async (req, res) => {
  try {
    const newGoal = await Goal.create({
      text: req.body.goal.text,
      description: req.body.goal.description,
    });
    req.user.projects[req.index].goals.push(newGoal);
    await req.user.save();
    res.send(req.user.projects[req.index].goals);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post(
  "/checkGoal",
  verifyUser,
  getProjectIndex,
  getGoalIndex,
  async (req, res) => {
    try {
      req.user.projects[req.projectIndex - 1].goals[req.goalIndex - 1].checked =
        !req.user.projects[req.projectIndex - 1].goals[req.goalIndex - 1]
          .checked;
      await req.user.save();
      res.status(200).send("Success!");
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
);

router.post(
  "/deleteGoal",
  verifyUser,
  getProjectIndex,
  getGoalIndex,
  async (req, res) => {
    try {
      req.user.projects[req.projectIndex - 1].goals.splice(
        req.goalIndex - 1,
        1
      );
      await req.user.save();
      res.status(200).send(req.user.projects[req.projectIndex - 1].goals);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
);

router.post("/addSession", verifyUser, getProjectIndex, async (req, res) => {
  try {
    const currentSessionIndex = await req.user.projects[
      req.projectIndex - 1
    ].sessions.findIndex(
      (session) => session.seconds === req.body.sessionLength
    );

    req.user.projects[req.projectIndex - 1].sessions[
      currentSessionIndex
    ].value += 1;

    // Without this line mongoose can't track the changes. Have no idea why.
    req.user.markModified("projects");

    await req.user.save();
    res.status(200).send({
      currentSessionIndex,
      value:
        req.user.projects[req.projectIndex - 1].sessions[currentSessionIndex]
          .value,
    });
  } catch (err) {
    res.status(400).send(err.message);
    console.log(err.message);
  }
});

router.post("/edit/:tab", verifyUser, getProjectIndex, async (req, res) => {
  // tab give us the info from what tab comes the request and what text should be edited
  const { tab } = req.params;
  try {
    req.user.projects[req.projectIndex - 1][tab] = req.body.editedText;
    await req.user.save();
    res.status(200).send("Success!");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

export default router;
