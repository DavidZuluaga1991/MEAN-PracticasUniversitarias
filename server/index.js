const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors({origin: 'localhost:4200'}));
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/internships', require('./routes/internships.routes'));
app.use('/api/ui', require('./routes/usersinternships.routes'));


app.listen(3000, () => {
    console.log('Server on port ', app.get('port'));
});