import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("this Works!!");
});

export default router;
