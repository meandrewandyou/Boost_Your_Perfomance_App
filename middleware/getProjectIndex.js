const getProjectIndex = (req, res, next) => {
  const index =
    req.user.projects.findIndex(
      (project) => project.id === req.body.projectId
    ) + 1;
  // +1 is to fight undefined index in req if it's 0
  index
    ? (req.projectIndex = index)
    : res.status(400).send("Can't find the project");
  next();
};

export default getProjectIndex;
