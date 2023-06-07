const React = require("react");

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/style.css" />
        <script defer src="/auth.js" />
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=8060eaa3-444b-41e9-9731-5f92109b4358&lang=ru_RU"
          type="text/javascript"
        ></script>
        <script type="text/javascript" defer src="/test.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
