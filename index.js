const app = require('express')();   //usando o EXPRESS
const bP = require('body-parser');  //usando o Body-Parser
const PORT = process.env.PORT || 8000;

// HOME - INICIO
app.get('', (req, res) => {
    res.send('aros-deploy');
});

// ABOUT - SOBRE
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/html/about.html');
})

app.listen(PORT, () => {
    console.log('Este app está escutando na port ${PORT}');
});