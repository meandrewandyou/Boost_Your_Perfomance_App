const getGoalIndex = (req, res, next) => {
  const index =
    req.user.projects[req.projectIndex - 1].goals.findIndex(
      (goal) => goal.id === req.body.goalId
    ) + 1;
  // +1 is to fight undefined index in req if it's 0

  index ? (req.goalIndex = index) : res.status(400).send("Can't find the goal");
  next();
};

export default getGoalIndex;
