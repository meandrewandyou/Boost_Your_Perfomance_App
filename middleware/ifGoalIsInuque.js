const ifGoalIsUnique = async (req, res, next) => {
  try {
    const index = await req.user.projects.findIndex(
      (project) => project.id === req.body.projectId
    );
    const foundGoal = await req.user.projects[index].goals.find(
      (goal) => goal.text === req.body.goal.text
    );
    if (foundGoal) {
      res.status(400).send("You already have this goal");
    } else {
      req.index = index;
      next();
    }
  } catch (err) {
    res.status(400).send("Ooops! Try one more time");
  }
};

export default ifGoalIsUnique;
