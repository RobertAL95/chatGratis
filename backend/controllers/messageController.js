const Message = require('../models/message');

exports.sendMessage = async (req, res) => {
  const { receiver, content } = req.body;
  try {
    const newMessage = new Message({
      sender: req.user.id,
      receiver,
      content,
    });
    const message = await newMessage.save();
    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [{ sender: req.user.id }, { receiver: req.user.id }],
    }).sort({ timestamp: -1 });
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
