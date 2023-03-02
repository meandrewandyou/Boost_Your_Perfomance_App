import User from "../models/user.js";

const ifUserExists = async (req, res, next) => {
  try {
    const foundUser = await User.findOne({ userName: req.body.loggedUser });
    if (foundUser) {
      req.user = foundUser;
    } else {
      console.log("No user found");
    }
  } catch (err) {
    console.log(err.message);
  }

  next();
};

export default ifUserExists;
