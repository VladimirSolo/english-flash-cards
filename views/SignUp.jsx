const React = require('react');
const Layout = require('./Layout');

function SignUp({}) {
  return (
    <Layout>
      <form action="/signUp" method="POST" id="loginForm">
        <div className="col mb-3" style={{color:"#007fff"}}>
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
          name="name"
            type="name"
            className="form-control"
            id="exampleInputname"
            aria-describedby="nameHelp"
            style={{ width: "500px" }}
          />
        </div>
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
            style={{ width: "500px" }}
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
            style={{ width: "500px" }}
          />
        </div >
        
        <button type="submit" className="btn" style={{ backgroundColor: "pink" }}>
          Зарегистрироваться
        </button>
      </form>
    </Layout>
  );
}

module.exports = SignUp;
