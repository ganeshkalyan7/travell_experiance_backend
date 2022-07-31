const UserSchema = require("../models/UserSchema");
const bcrypt = require("bcryptjs");

exports.register = async (req, res, next) => {
  try {
    //userExists or not
    const ExistsUser = await UserSchema.findOne({ email: req.body.email });
    if (ExistsUser) {
      res.status(500).json({ msg: "user already exist!!!" });
    }

    //GENERATING ENCCRIPT PASSWORD
    const salt = await bcrypt.genSalt(10);
    hashedpassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new UserSchema({
      username: req.body.username,
      email: req.body.email,
      password: hashedpassword,
    });
    const users = await newUser.save();
    res.status(201).json(users);
  } catch (err) {
    console.log(err);
  }
};

//login

exports.login = async (req, res, next) => {
  try {
    const user = await UserSchema.findOne({ username: req.body.username });
    if (!user) {
      res
        .status(500)
        .json({ msg: "usersname doesnst exist!!!!! please register" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      res.status(400).json({ msg: "invalid password" });
    }
    //send response if username and password is corect
    res
      .status(200)
      .json({ _id: user._id, username: user.username, email: user.email });
  } catch (err) {
    console.log(err);
  }
};

//getting the users
exports.getUsers = async (req, res, next) => {
  try {
    const getUser = await UserSchema.findOne();
    res.status(200).json(getUser);
  } catch (err) {
    console.log(err);
  }
};
