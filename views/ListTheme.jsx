const React = require('react');
const Layout = require('./Layout');

function ListTheme({ themes, user }) {
  console.log('themes', themes);
  return (
    <Layout user={user}>
      <h1>
        {user.name}
        , выбирай и изучай!
      </h1>

      <div className="row row-cols-1 row-cols-md-4 g-4 box_theme" key={themes['List.id']}>
        {themes.map((theme) => (
          <div className="col">
            <div className="card box_card">
              <div className="card-body">
                <h5 className="card-title">{theme['List.title']}</h5>
                <a href={`/list/${theme['List.id']}`} className="btn text-white" style={{ background: '#d63384' }}>Иди учи</a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </Layout>
  );
}

module.exports = ListTheme;
