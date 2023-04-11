console.clear();
import express from "express";
import dotenv from "dotenv";

dotenv.config(); // cogemos el .env (por defecto .env a no ser que le cambiemos el nombre y se lo indiquemos)

const PORT = process.env.PORT;
const app = express();

// app.use(express.json());
app.use(express.text())

app.get('/users/:id', (req, res) => {
    res.send(`id: ${req.params.id}`);
});

app.get('/users', (req, res) => {
    res.send(`Lista de usuarios`);
});

app.post('/users', (req, res) => {
    console.log(req.is('json'));
    console.log(req.query.p1);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost: ${PORT}`);
})