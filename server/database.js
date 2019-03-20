const mongoose = require('mongoose');
const URL = 'mongodb+srv://davidzuluaga:ChV7efEaG4Sztw!@cluster0-xwfei.gcp.mongodb.net/test?retryWrites=true';

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