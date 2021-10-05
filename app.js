const app = require('express')();
const PORT = process.env.PORT || 3000;

app.get('', (req, res) => {
    res.send('Hello World - AROS07');
});

app.listen(PORT, () => {
    console.log('Este app está escutando na port ${PORT}');
});