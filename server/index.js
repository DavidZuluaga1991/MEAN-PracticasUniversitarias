const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const { mongoose } = require("./database");

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(cors({ origin: "http://localhost:4200" }));
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/login", require("./routes/login.routes"));
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/internships", require("./routes/internships.routes"));
app.use("/api/ui", require("./routes/usersinternships.routes"));


app.post("/login2", function(request, response) {
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
        jwtClave, { expiresIn: '24h' }  // expires in 24 hours
      );
    response.send(token);
  } else {
    response.status(401).end("Usuario Incorrecto");
  }
});

app.listen(3000, () => {
  console.log("Server on port ", app.get("port"));
});
