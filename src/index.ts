import express from "express";
import diaryRouter from "./routes/diaries.routes";

const app = express();
const PORT = 1705;

app.use(express.json()); //Middleware para convertir la req.body a json
app.use("/api/diaries", diaryRouter);

app.get("/ping", (_req, res) => {
	console.log("someone be here");
	res.send("pong");
});

app.listen(PORT, () => {
	console.log(`Corriendo en ${PORT}`);
});
