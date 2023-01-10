const React = require("react");
const Layout = require("./Layout");

function Main({}) {
  return (
    <Layout>
      <form >
        <div className="col mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Login
          </label>
          <input
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
