const React = require("react");
const Layout = require("./Layout");

function Main({ }) {
  return (
    <Layout >
      <form action="/" method="POST" id="loginForm">
        <div className="col mb-3" style={{color:"#007fff"}}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Login
          </label>
          <input
          name="login"
            type="login"
            className="form-control"
            id="exampleInputLogin"
            aria-describedby="loginHelp"
            style={{ width: "720px" }}
          />
        </div>
        <div className="col mb-3" style={{color:"#007fff"}}>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
          name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            style={{ width: "720px" }}
          />
        </div>
        <div >
        <button type="submit" className="btn btnMain" style={{ backgroundColor: "pink" }}>
          Войти
        </button>
        <a type="submit" className="btn  btnMain" href="/signUp" style={{ backgroundColor: "pink" }}>
          Зарегистрироваться
        </a>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Main;
