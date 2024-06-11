const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Finally, got hosted');
});

const server = app.listen(process.env.PORT || 3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server is running at ${port}`);
});
