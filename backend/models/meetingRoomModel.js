import mongoose from 'mongoose';
import User from './userModel';
import RoomPage from './roomPageModel';

const meetingRoomSchema = mongoose.Schema(
  {
    meetingRoomId: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      ref: 'RoomPage',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      default: 'public',
      enum: ['public', 'private'],
    },
    admin1: {
      type: String,
      required: true,
      ref: 'User',
    },
    participantsNumber: {
      type: Number,
      default: Date.now,
    },

  }
);

const MeetingRoom = mongoose.model('MeetingRoom', meetingRoomSchema);

export default MeetingRoom;
