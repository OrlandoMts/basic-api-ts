import { Router } from "express";
import * as diaryServices from "../services/diary.service";
import toNewDiaryEntry from "../utils";

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
	try {
		const newDiaryEntry = toNewDiaryEntry(req.body);
		const addDiaryEntry = diaryServices.addDiary(newDiaryEntry);
		res.json(addDiaryEntry);
	} catch (error: any) {
		res.status(400).send(error.message);
	}
});

export default router;
