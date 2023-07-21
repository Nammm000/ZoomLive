import mongoose from 'mongoose';
import User from './userModel';

const deletedSchema = mongoose.Schema(
  {
    deletedRoomId: {
      type: String,
      required: true,
      unique: true,
    },
    meetingRoomId: {
      type: String,
      required: true,
      ref: 'User',
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
    deletedAt: {
      type: Date,
      default: Date.now,
    },
    usingAt: {
      type: String,
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

const Deleted = mongoose.model('Deleted', deletedSchema);

export default Deleted;
