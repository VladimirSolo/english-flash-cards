const React = require("react");
const Layout = require("./Layout");

function NewWords({ user, usersList }) {
  // console.log('usersListNewWords======>', usersList);
  return (
    <Layout user={user}>
      <div className="position-relative">
        <div>
          <h3>{user.name}</h3>
        </div>
        <form
          className="addListAndWords"
          action="/user/newWords/new"
          method="POST"
          id="loginForm"
          name="addListAndWords"
        >
          <div className="col mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              выбери название темы, в которую хочешь добавить новые слова
            </label>
          </div>
          <div className="input-group mb-3">
            <select
              className="form-select"
              name="addWords"
              id="addWords"
              required
            >
              {/* <option selected>Выбери...</option> */}
              {usersList &&
                usersList.map((el) => (
                  <option name="list" value={el.id}>
                    {el.title}
                  </option>
                ))}
            </select>
          </div>
          <div className="input-group mb-3">
            <input
              name="title_rus"
              type="text"
              className="form-control"
              id="title_rus"
              placeholder="слово на русском"
              aria-label="Username"
            />
            <input
              name="title_eng"
              type="text"
              className="form-control"
              id="title_eng"
              placeholder="перевод слова на английский"
              aria-label="Server"
            />
          </div>
          <div className="slovo">
              <button type="submit" className="btn btn-info">
                Создать
              </button>
          </div>
        </form>
        
      </div>
    </Layout>
  );
}

module.exports = NewWords;
