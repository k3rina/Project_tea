const React = require("react");
const Layout = require("./Layout");

function MainPage({ title, user }) {
  // console.log(user);
  return (
    <Layout title={title} user={user} >
      <h1>Main page</h1>
      <script
        type="text/javascript"
        charset="utf-8"
        async
        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af0931184363b9140c163fb66d6b1a8127b06bef74676da18acf2ab81833178ac&amp;width=562&amp;height=441&amp;lang=ru_RU&amp;scroll=true"
      ></script>
    </Layout>
  );
}

module.exports = MainPage;
