const React = require('react');
const Layout = require('./Layout');

function ListTheme({ themes, user }) {
  return (
    <Layout user={user}>
      <h1>
        {user.name}
        , выбирай и изучай!
      </h1>

      <div className="row row-cols-1 row-cols-md-3 g-4" key={themes.id}>
        {themes.map((theme) => (
          <div className="col">
            <div className="card" >
              <img src="..." className="card-img-top" alt="..." />  
              <div className="card-body">
                <h5 className="card-title">{theme.title}</h5>
                <a href={`/list/${theme.id}`} className="btn text-white" style={{ background: '#d63384' }}>Иди учи</a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </Layout>
  );
}

module.exports = ListTheme;
