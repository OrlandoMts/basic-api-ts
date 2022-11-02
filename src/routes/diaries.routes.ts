import { Router } from "express";
import * as diaryServices from "../services/diary.service";

const router = Router();

router.get("/", (_req, res) => {
	res.send(diaryServices.getEntriesNoComments());
});

router.get("/:id", (req, res) => {
	const entryRes = diaryServices.getEntryById(+req.params.id);
	entryRes ? res.send(entryRes) : res.sendStatus(404);
});

router.get("/no-com/:id", (req, res) => {
	const entryRes = diaryServices.getEntryByIdNOComm(+req.params.id);
	entryRes ? res.send(entryRes) : res.sendStatus(404);
});

router.post("/", (req, res) => {
	const { date, weather, visibility, comment } = req.body;
	const newEntryDiary = diaryServices.addDiary({
		date,
		weather,
		visibility,
		comment,
	});
	res.send(newEntryDiary);
});

export default router;
