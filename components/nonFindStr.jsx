const React = require("react");
const Layout = require("./Layout");

module.exports = function nonFound({ title }) {
  return (
    <>
      <html lang="ru">
        <head>
          <title>{title}</title>
          <link rel="stylesheet" href="/style.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Arvo"
          />
        </head>
        <body>
          <section className="page_404">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 ">
                  <div className="col-sm-10 col-sm-offset-1 text-center">
                    <div className="four_zero_four_bg">
                      <h1 className="text-center ">404</h1>
                    </div>
                    <div className="contant box 404">
                      <h3 className="h2">Look like you're lost</h3>
                      <p>the page you are looking for not avaible!</p>
                      <a href="/" className="link_404">
                        Go to Home
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </body>
      </html>
    </>
  );
};
