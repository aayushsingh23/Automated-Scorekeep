const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 50000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`${process.env.PORT}`);
});
