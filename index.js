const app = require('express')();   //usando o EXPRESS
const bParser = require('body-parser');  //usando o Body-Parser

const PORT = process.env.PORT || 8000;

//  ------- //

app.use(bParser.urlencoded({extended: false}));
app.use(bParser.json());

// HOME - INICIO
app.get('', (req, res) => {
    res.send('aros-deploy - redondo');
});

// ABOUT - SOBRE
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/html/about.html');
});

//  CAD - CADASTRO
app.post('/cad', (req, res) => {
    res.send('De boas ' +req.body.nome+'!');
});

app.listen(PORT, () => {
    console.log('Este app está escutando na port ${PORT}');
});
