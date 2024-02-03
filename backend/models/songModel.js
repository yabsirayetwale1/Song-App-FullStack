import mongoose from 'mongoose';

const songSchema = mongoose.Schema({
    title: String,
    genre: String,
    singer: String,
    imgUrl: String,
    audio: {
        type: String,
        required:true,
        default: null,
    },
    releasedAt: {
        type: Date,
        default: new Date(),
    },
})

var songModel = mongoose.model('PostMessage', songSchema);

export default songModel;