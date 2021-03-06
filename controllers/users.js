const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
};

async function login(req, res) {
  try {
    console.log('login controller : 1')
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: '1 : bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        console.log('login controller : 2 => password is a match')
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: '2 : bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function signup(req, res) {
  const user = new User(req.body);
  console.log( `this is user in controller = ${user}`);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({token});
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}


/*--- helper functions ---*/

function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}