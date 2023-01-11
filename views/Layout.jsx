const React = require('react');

function Layout({ children, user }) {
  console.log('userLayout+++++++++>', user);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LearnYourEnglish</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
        {/* <script defer src="/js/application.js" /> */}
        {/* <link rel="stylesheet" href="/css/style.css" /> */}
      </head>
      <body>
        {
          user
            ? (
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/list"> Home </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/user"> User </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/logout">LogOut</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            ) : (
              <div>Hello, World!</div>
            )
        }
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;
