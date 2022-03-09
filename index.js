const express = require("express")
const app = express()
const Corrosion = require("./lib/server")
const Palladium = require("./palladium/server")
const port = 80

const proxy = new Corrosion({
  prefix: "/corrosion/",
  codec: "xor",
  title: "Andromeda",
  forceHttps: true,
  requestMiddleware: [
    Corrosion.middleware.blacklist([
       "accounts.google.com",
      ], "Page is blocked"),
  ]
});

proxy.bundleScripts();

const PalladiumProxy = new Palladium({
    prefix: "/palladium/",
    ssl: false,
    encode: "xor",
    title: "Andromeda",
    Corrosion: [true, proxy],
    server: app
    /*
    "requestMiddleware": [
      Palladium.blackList(["discord.com", "accounts.google.com"], "Page is Blocked by Host")
    ],
    */
})

PalladiumProxy.init();

app.use(express.static("./public", {
  extensions: ["html"]
}));

app.get("/", function(req, res){
  res.sendFile("index.html", {root: "./public"});
});

app.listen(port, () => {
  console.log('Server is running on port ' + port + '')
});