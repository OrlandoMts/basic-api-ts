import { Router } from "express";
const router = Router();

router.get("/", (_req, res) => {
	res.send("solicitud get");
});

router.post("/", (_req, res) => {
	res.send("solicitud post");
});

export default router;
