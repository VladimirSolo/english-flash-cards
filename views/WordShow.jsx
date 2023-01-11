const React = require('react');
const Layout = require('./Layout');

function WordShow({ words, user }) {
  return (
    <Layout user={user}>

      <div key={words.id}>
        {words.map((word) => (
          <div>
            <h1>{word.title_eng}</h1>
            <h1>{word.title_rus}</h1>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = WordShow;
