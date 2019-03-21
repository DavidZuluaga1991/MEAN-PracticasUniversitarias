const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const app = express();
const { mongoose } = require("./database");

var jwtClave = "laclave_de_cecilio";
app.use(express.static("publica"));
app.use(bodyParser.json());

app.use(expressJwt({ secret: jwtClave }).unless({ path: ["/login"] }));
// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(cors({ origin: "localhost:4200" }));
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/internships", require("./routes/internships.routes"));
app.use("/api/ui", require("./routes/usersinternships.routes"));

var usuario = {
  nombre: "cecilio",
  clave: "cecilio"
};

app.post("/login", function(request, response) {
  if (
    request.body.nombre == usuario.nombre ||
    request.body.clave == usuario.clave
  ) {
    // var token = jwt.sign(
    //   {
    //     usuario: "cecilio"
    //   },
    //   jwtClave
    // );
    let token = jwt.sign({username: "cecilio"},
        jwtClave,
        {
            expiresIn: '24h' // expires in 24 hours
        }
      );
    response.send(token);
  } else {
    response.status(401).end("usuario incorrecto");
  }
});

app.listen(3000, () => {
  console.log("Server on port ", app.get("port"));
});
