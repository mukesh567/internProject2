
const express = require('express')
const InternProject = require('../models/intern');
const router = express.Router();


router.post("/register", async (req, resp) => {
    try {
        const user = new InternProject(req.body);
        let result = await user.save();
        resp.status(201).send(result);
    } catch (err) {
        resp.status(400).send(err);
    }
})

module.exports = router;
