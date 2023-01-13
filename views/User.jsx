const React = require("react");
const Layout = require("./Layout");

function User({ user, userThemes }) {
  return (
    <Layout user={user}>
      <div className="position-relative">
        <div>
          <h3>
            Привет, { user.name }
          </h3>
        </div>
        <div>
          <div
            className="btn-group-vertical"
            role="group"
            aria-label="Vertical button group"
          >
            <a href="/user/newList">
              <button type="button" className="btn btn-info">
                Создать новую тему 
              </button>
            </a>
            <a href="/user/newWords">
              <button type="button" className="btn btn-info" href="/newTheme">
                Создать новую карточку 
              </button>
            </a>
            <a href="/newTheme">
              <button type="button" className="btn btn-info" href="/myThemes">
                Созданные мной темы
              </button>
            </a>
          </div>
        </div>
        <h4>Темы, которые ты изучаешь</h4>
        <div>
          <ul>
            {userThemes?.map((el) => (
              <li>{el['List.title']}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

module.exports = User;
