const React = require('react');
const Layout = require('./Layout');

function User({ user, UserThemes, obj }) {
  // find unique values
  const res = UserThemes.reduce((arr, i) => {
    if (!arr.find((el) => el['List.title'] === i['List.title'])) {
      arr.push(i);
    }
    return arr;
  }, []);
  // console.log(res);
  return (
    <Layout user={user}>
      <div className="position-relative" className="mainPage">
        <div className="firstRow">
          <div className="hello" style={{ color: '#007fff' }}>
            <h3>
              Привет,
              {' '}
              {user.name}
            </h3>
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
                  style={{ backgroundColor: 'pink' }}
                >
                  Создать новую тему
                </button>
              </a>
              <a href="/user/newWords">
                <button
                  type="button"
                  className="btn btnUser"
                  style={{ backgroundColor: 'pink' }}
                >
                  Создать новую карточку
                </button>
              </a>
              <a href="/user/myThemes">
                <button
                  type="button"
                  className="btn btnUser"
                  style={{ backgroundColor: 'pink' }}
                >
                  Созданные мной темы
                </button>
              </a>
            </div>
          </div>
        </div>
        <div style={{ color: '#007fff' }}>
          <h4>Темы, которые ты изучаешь</h4>
        </div>
        <div>
          {res?.map((el) => (
            <div className="statistic" key={el.id}>
              <h2>{el['List.title']}</h2>
              изучено:
              <p className="trueStatus">
                {obj[el['List.title']].tr}
              </p>
              всего изучить:
              <p className="falseStatus">
                {obj[el['List.title']].fl + obj[el['List.title']].tr}
              </p>
              <svg className="progress_ring" width="120" height="120">
                <text x="29" y="70" fontFamily="Verdana" fontSize="25" fill="blue">
                  {Math.floor((obj[el['List.title']].tr * 100) / (obj[el['List.title']].fl + obj[el['List.title']].tr))}
                  %
                </text>
                <circle className="progress_circle" stroke="#ff80bf" strokeWidth="14" cx="60" cy="60" r="52" fill="transparent" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = User;
