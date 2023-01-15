const React = require('react');
const Layout = require('./Layout');

function MyThemes({ user }) {
  return (
    <Layout user={user}>
      <h1>My Themes</h1>
      <h2>{user.name}</h2>
    </Layout>
  );
}

module.exports = MyThemes;
