const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://sanjar:sanjar12345@cluster0.eqx2jcf.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useeNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err)
      console.log(
        "ERROR on connection MongoDB",
      );
    else {
      console.log(
        "MongoDB  connection secceed",
      );
      module.exports = client;
      const app = require("./app");
      const server =
        http.createServer(app);
      let PORT = 3001;
      server.listen(PORT, function () {
        console.log(
          `The server is running. succesfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
