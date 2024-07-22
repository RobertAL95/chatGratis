const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/messageController');
const auth = require('../middleware/auth');

// @route    POST api/messages
// @desc     Send message
// @access   Private
router.post('/', auth, sendMessage);

// @route    GET api/messages
// @desc     Get messages
// @access   Private
router.get('/', auth, getMessages);

module.exports = router;
