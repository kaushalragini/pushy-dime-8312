const bcrypt = require("bcrypt");

const hashPassword = (req, res, next) => {
  const { email, password } = req.body;

  if (password) {
    bcrypt.hash(password, 5, (err, hash) => {
      if (err) {
        res.status(500).json({ msg: "Error Occured!" });
      } else {
        req.body.password = hash;
        next();
      }
    });
  } else if (req.method == "PATCH") {
    next();
  } else {
    res.send({ msg: "Password is missing" });
  }
};

module.exports = {
  hashPassword,
};
