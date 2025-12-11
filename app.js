const express = require('express')
const routes = require('./routes/routes')
const mongoConnect = require('./util/database').mongoConnect

const app = express();
const port = 3050;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Para aceitar JSON do Postman
app.use(routes);

mongoConnect(() => {
    app.listen(port)
})
