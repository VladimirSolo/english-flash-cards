const React = require('react');
const Layout = require('./Layout');

function MyThemes({ user, themes }) {
  return (
    <Layout user={user}>
      <h1 className="p-3">Мои темы</h1>
      <div className="list_themes row row-cols-1 row-cols-md-2 g-3" key={themes.id}>
        { themes?.map((theme) => (
          <div className="col">
            <div className="card">
              <div className="card-body card_flex">
                <h5 className="card-title">{theme['List.title']}</h5>
                <a href={`/user/myThemes/${theme.id}`} className="btn btn-info">More infomation</a>
                {/* open modal window */}
                <button type="button" className="btn btn-warning editBtn m-1" data-themeid={theme.id} data-bs-toggle="modal" data-bs-target="#editWindow">edit</button>
                <button type="button" className="delete btn btn-danger">delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = MyThemes;
