const express = require('express');
const cors = require('./middleware/cors');
const timestampRoutes = require('./routes/timestamp');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/timestamp', timestampRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});