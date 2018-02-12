var User = require('../models/user');


module.exports = function(router) {
  router.post('/users', function(req, res) {
    // console.log(req);
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    if (!user.username || !user.password || !user.email) {
      res.send('Ensure, email and password were provided');
    } else {
      user.save( (err) => {
        if (err) {
          res.send("Username or email already exists");
        } else {
          res.send('user created');
        }
      });
    }
  })

  return router;
}
