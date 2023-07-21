import mongoose from 'mongoose';

const roomPageSchema = mongoose.Schema(
  {
    roomPageId: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

  }
);

const RoomPage = mongoose.model('RoomPage', roomPageSchema);

export default RoomPage;
