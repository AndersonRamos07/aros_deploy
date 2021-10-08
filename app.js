const app = require('express')();
const PORT = process.env.PORT || 3000;

app.get('', (req, res) => {
    res.send('Hello World - AROS07');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
})

app.listen(PORT, () => {
    console.log('Este app está escutando na port ${PORT}');
});