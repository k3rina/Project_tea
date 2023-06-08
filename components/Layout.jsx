const React = require("react");
const Navbar = require("./Navbar");

function Layout({ title, children, user }) {
  // console.log(user);
  return (
    <html lang="ru">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <script defer src="/auth.js" />
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=8060eaa3-444b-41e9-9731-5f92109b4358&lang=ru_RU"
          type="text/javascript"
        ></script>
        <script type="text/javascript" defer src="/test.js" />
        <script type="text/javascript" defer src="/teas.js" />
      </head>
      <body>
        <div className="container">
          <Navbar user={user} />
          {children}
        </div>
      </body>
      <footer
        className="text-center text-white fixed-bottom"
        style={{ backgroundColor: "#21081a"}}
      >
        <div className="container p-4"></div>
        <div
          className="text-center p-3"
          style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
        >
          © 2023 Copyright:
          <a className="text-white" href="/">
            чай.com
          </a>
        </div>
      </footer>
    </html>
  );
}

module.exports = Layout;
