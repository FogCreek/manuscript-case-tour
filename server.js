// server.js
// where your node app starts

// init project
// https://www.npmjs.com/package/hyperweb-init
var hw = require("hyperweb-init");
app = hw.init();

// app is Express
// http://expressjs.com/en/starter/basic-routing.html

app.get("/", function (request, response) {
  response.render('index.html', {
    title: "Welcome To FogBugz!"
  });
});

app.get("/features/*", function (request, response) {
  response.render("features/" + request.params[0], {
    title: "Response"
  });
});


