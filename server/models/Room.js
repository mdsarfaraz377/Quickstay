import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
    hotel: {type: String, ref: "Hotel", req: true},
    roomType: {type: String, req: true},
    pricePerNight: {type: Number, req:true},
    ammenities: {type: Array, req: true},
    images: [{type: String}],
    isAvailable: {type: Boolean, default: true}

}, {timeStamps : true});

const Room = mongoose.model("Room", roomSchema);

export default Room