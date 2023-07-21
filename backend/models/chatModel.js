import mongoose from 'mongoose';
import User from './userModel';

const chatSchema = mongoose.Schema(
  {
    chatId: {
      type: String,
      required: true,
    },
    roomPageId: {
      type: String,
      required: true,
      ref: 'RoomPage',
    },
    comment: {
      type: String,
      required: true,
      ref: 'RoomPage',
    },
    commentAt: {
      type: Date,
    },
    commentatorId: {
      type: String,
      required: true,
      ref: 'User',
    },
    

  }
);

const Chat = mongoose.model('Deleted', chatSchema);

export default Chat;