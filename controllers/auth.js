const User = require('../models/user');
const bcrypt = require('bcryptjs')
exports.postSign = (req, res) => {
  const {login, password} = req.body
  if (!!req.body) {
    User.findOne({email: login})
      .then(user => {
        if (!user) {
          bcrypt.hash(password, 10)
            .then(resultPass => {
              let user = new User({
                email: login,
                password: resultPass
              })
              user
                .save()
                .then(user => {
                  res.status(200).json(user)
                })
            })
        } else {

          res.status(401).send({ err: 'User already registration' });
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}

//
// exports.getSign = (req, res) => {
//   res.send('get bla bla')
// }
