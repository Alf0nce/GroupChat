const express = require("express");
const router = express.Router();
const { getRoomMessages } = require('../controlllers/messageController');


router.get('/:roomId', getRoomMessages);

module.exports = router;