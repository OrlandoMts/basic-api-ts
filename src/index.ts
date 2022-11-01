import express from "express";
const app = express();
app.use(express.json()); //Middleware para convertir la req.body a json

const PORT = 1705;

app.get("/ping", (_req, res) => {
	console.log("someone be here");
	res.send("pong");
});

app.listen(PORT, () => {
	console.log(`Corriendo en ${PORT}`);
});
