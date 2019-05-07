const mongoose = require('mongoose');
// const URL = 'mongodb+srv://davidzuluaga:ChV7efEaG4Sztw!@cluster0-xwfei.gcp.mongodb.net/test?retryWrites=true';
// const URL = "mongodb://localhost/test?retryWrites=true";
const dbName = 'test';
const URL = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${dbName}:27017?authMechanism=SCRAM-SHA-1&authSource=admin`

mongoose.connect(URL, {useNewUrlParser: true } )
    .then(db => {
        console.log('Conectado a la base de datos.');
        // console.log(db);
        // const collection = client.db("test").collection("devices");
        // // perform actions on the collection object
        // client.close();
    })
    .catch(err => console.error(err));

module.exports = mongoose;