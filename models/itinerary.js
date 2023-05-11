import mongoose from "mongoose";

const Schema = mongoose.Schema


const flightSchema = new Schema(
  {
    airline: {String, required: true},
    roundtrip: Boolean,
    departureAirport: {String, required: true},
    departureDate: Date,
    arrivalAirport: String, 
    arrivalDate: Date,
    recordLocator: String,
    cost: Number
  }
)

const accomodationSchema = new Schema(
  {
    type: {String, enum:["Hotel", "Cruise", "Airbnb", "Other"]},
    name: String,
    checkInDate: Date,
    checkOutDate: Date,
    address: String,
    website: String,
    cost: Number
  }
)

const itinerarySchema = new Schema ({

  title: {String, required: true},
  photo: String,
  budget: Number,
  cost: Number,
  startDate: Date,
  endDate: Date,
  city: {String, required: true},
  country: {String, required: true},
  flights: [flightSchema],
  accomodation: [accomodationSchema],
  owner: {ObjectId, ref: "Profile"}
})


const Itinerary = mongoose.model('Itinerary', itinerarySchema)

export {Itinerary}