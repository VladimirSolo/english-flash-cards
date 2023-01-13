const React = require('react');
const Layout = require('./Layout');

function WordShow({ listOfWord, user }) {
    // console.log('===listOfWord======', listOfWord);
  return (

    <Layout user={user}>

      <div className="wrapper" key={listOfWord.id}>
        {listOfWord.map((word) => (
          <div className="wrapper_card" data-id={word.id}>
            <p className="front rotate">
              {word.title_eng}
              <button type="button" className="btnDelete btn btn-warning">done</button>
            </p>
            <p className="back rotate">
              {word.title_rus}
              <button type="button" className="btnDelete btn btn-warning">done</button>
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = WordShow;
