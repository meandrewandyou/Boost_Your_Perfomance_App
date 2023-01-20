import User from "../models/user.js";

const checkUniqueUser = async (req, res, next) => {
  const { userName, email } = req.body;
  const sameName = await User.findOne({ userName });
  if (sameName)
    return res
      .status(400)
      .send(`User with the name ${userName} is already exists.`);
  const sameMail = await User.findOne({ email });
  if (sameMail)
    return res
      .status(400)
      .send(`User with the mail ${email} is already exists.`);

  next();
};

export default checkUniqueUser;
