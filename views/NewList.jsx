const React = require("react");
const Layout = require("./Layout");

function NewList({ user }) {
  return (
    <Layout user={user}>
      <div className="position-relative">
        <div>
          <h3>{user.name}</h3>
        </div>
        <form
          name="addNewList"
          action="/user/newList/new"
          method="POST"
          id="loginForm"
        >
          <div className="col mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              придумай название темы для изучения
            </label>
            <input
              name="newList"
              type="name"
              className="form-control"
              id="newList"
              aria-describedby="nameHelp"
              required
            />
          </div>
          <div className="slovo">
            <button type="submit" className="btn btn-info" href="/newTheme">
                Создать
             </button>

          </div>
        </form>
      </div>
    </Layout>
  );
}

module.exports = NewList;
