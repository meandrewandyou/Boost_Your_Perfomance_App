const ifProjectIsUnique = async (req, res, next) => {
  try {
    const project = await req.user.projects.find(
      (foundProject) =>
        foundProject.projectName === req.body.project.projectName
    );
    if (project) {
      res.status(400).send("You already work on this project of yours.");
    } else {
      next();
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export default ifProjectIsUnique;
