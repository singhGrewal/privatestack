const dbuser = "private";
const dbpassword = "admin123";

module.exports = {
  mongoURI: `mongodb://${dbuser}:${dbpassword}@ds143603.mlab.com:43603/privatestack`,
  secretOrKey: "secret"
};
