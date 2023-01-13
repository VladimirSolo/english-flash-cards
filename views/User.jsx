const React = require("react");
const Layout = require("./Layout");

function User({ user, userThemes }) {
  return (
    <Layout user={user}>
      <div className="position-relative" className="mainPage">
        <div className="firstRow">
          <div className="hello" style={{color:"#007fff"}}>
            <h3>Привет, {user.name}</h3>
          </div>
          <div className="btns">
            <div
              className="btn-group-vertical"
              role="group"
              aria-label="Vertical button group"
            >
              <a href="/user/newList">
                <button
                  type="button"
                  className="btn btnUser"
                  style={{ backgroundColor: "pink" }}
                >
                  Создать новую тему
                </button>
              </a>
              <a href="/user/newWords">
                <button
                  type="button"
                  className="btn btnUser"
                  style={{ backgroundColor: "pink" }}
                >
                  Создать новую карточку
                </button>
              </a>
              <a href="/newTheme">
                <button
                  type="button"
                  className="btn btnUser"
                  href="/myThemes"
                  style={{ backgroundColor: "pink" }}
                >
                  Созданные мной темы
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div style={{color:"#007fff"}}>
            <h4>Темы, которые ты изучаешь</h4>
          </div>
          <div>
            <ul>
              {userThemes?.map((el) => (
                <li>{el["List.title"]}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = User;
