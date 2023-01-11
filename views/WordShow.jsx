const React = require('react');
const Layout = require('./Layout');

function WordShow({ words, user }) {
  return (
    <Layout user={user}>

      <div className="wrapper" key={words.id}>
        {words.map((word) => (
          <div className="wrapper_card">
            <p className="front">{word.title_eng}</p>
            <p className="back">{word.title_rus}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = WordShow;
