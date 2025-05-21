import Message from "../models/message.model";

export const getUserSidbar = async (req, res) => {};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    const message = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });
    res.status(200).json(message);
  } catch (error) {
    console.log("error in get message",error.message)
    res.status(500).json({error:"internal server error"})
  }
};
