const React = require("react");
const Layout = require("./Layout");

function NewWords({ user, usersList }) {
  // console.log('usersListNewWords======>', usersList);
  return (
    <Layout user={user}>
        <script defer src="/js/application.js" />
        <div  className="newWordPage">

      <div className="position-relative">
        <div style={{color:"#007fff"}} className="userName" >
          <h3>{user.name}</h3>
        </div>
        <div>
        <form
          className="addListAndWords"
          action="/user/newWords/new"
          method="POST"
          id="loginForm"
          name="addListAndWords"
        >
          <div className="col mb-3" className="text" >
            <label htmlFor="exampleInputName" className="form-label" style={{color:"#007fff"}}> 
              выбери название темы, в которую хочешь добавить новые слова
            </label>
          </div>
          <div className="input-group mb-3" style={{width: "600px"}}>
            <select
              className="form-select"
              name="addWords"
              id="addWords"
              required
            >
              <option selected>Выбери...</option>
              {usersList &&
                usersList.map((el) => (
                  <option name="list" value={el['List.id']}>
                    {el['List.title']}
                  </option>
                ))}
            </select>
          </div>
          <div className="input-group mb-3" style={{width: "600px"}}>
            <input
              name="title_rus"
              type="text"
              className="form-control"
              id="title_rus"
              placeholder="слово на русском"
              aria-label="Username"
              required
            />
            <input
              name="title_eng"
              type="text"
              className="form-control"
              id="title_eng"
              placeholder="перевод слова на английский"
              aria-label="Server"
              required
            />
          </div>
          <div className="slovo">
              <button type="submit" className="btn btnNewWord" style={{ backgroundColor: "pink" }}>
                Создать
              </button>
          </div>
        </form>
        </div>
        
      </div>
        </div>
    </Layout>
  );
}

module.exports = NewWords;
