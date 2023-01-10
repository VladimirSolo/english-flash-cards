// check authorization
function isUser(req, res, next) {
  if (!req.session.user) {
    res.redirect('/');
    return;
  }
  next();
}

module.exports = isUser;
