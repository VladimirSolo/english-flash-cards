const React = require("react");
const Layout = require("./Layout");

function NewList({ user }) {
  return (
    <Layout user={user}>
      <script defer src="/js/addList.js" />
      <div className="newListPage">
        <div className="position-relative">
          <div className="userName" style={{ color: "#007fff" }}>
            <h3>{user.name}</h3>
          </div>
          <div className="text" style={{color:"#007fff"}}>
            придумай название темы для изучения
          </div>
          <form
            name="addNewList"
            action="/user/newList/new"
            method="POST"
            id="loginForm"
          >
            <div className="col mb-3">
              {/* <label htmlFor="exampleInputName" className="form-label">
                придумай название темы для изучения
              </label> */}
              <input
                name="newList"
                type="name"
                className="form-control"
                id="newList"
                aria-describedby="nameHelp"
                style={{ width: "450px" }}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btnNewList"
                style={{ backgroundColor: "pink" }}
              >
                Создать
              </button>
            </div>
          </form>
          <div>
            <a className="slovo" href="/user/newWords">
              <button
                className="btn btnNewList"
                style={{ backgroundColor: "pink" }}
              >
                Перейти к созданию карточек
              </button>
            </a>
            <div className="slovo" style={{ color: "red" }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = NewList;
