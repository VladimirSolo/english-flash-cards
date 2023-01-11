const React = require("react");
const Layout = require("./Layout");

function Main({ }) {
  return (
    <Layout >
      <form action="/" method="POST" id="loginForm">
        <div className="col mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Login
          </label>
          <input
          name="login"
            type="login"
            className="form-control"
            id="exampleInputLogin"
            aria-describedby="loginHelp"
          />
        </div>
        <div className="col mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
          name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div>
        <button type="submit" className="btn btn-success">
          Войти
        </button>
        <a type="submit" className="btn btn-success" href="/signUp">
          Зарегистрироваться
        </a>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Main;
