import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: { type: String, required: true },
  departureAirport: { type: String, required: true },
  departureDate: Date,
  arrivalAirport: String,
  arrivalDate: Date,
  recordLocator: String,
  cost: Number,
})

const accommodationSchema = new Schema({
  type: { type: String, enum: ['Hotel', 'Cruise', 'Airbnb', 'Other'] },
  name: String,
  checkInDate: Date,
  checkOutDate: Date,
  address: String,
  website: String,
  cost: Number,
})

const activitySchema = new Schema({
  category: { type: String, enum: ['Activity', 'Restaurant', 'Landmark', 'Nightlife', "Other"] },
  name: String,
  date: Date,
  activityDate: Date,
  activityWebsite: String,
  notes: String,
  cost: Number,
})

const itinerarySchema = new Schema({
  title: { type: String, required: true },
  imgUrl: String,
  budget: Number,
  cost: Number,
  startDate: Date,
  endDate: Date,
  city: { type: String, required: true },
  country: { type: String, required: true },
  flights: [flightSchema],
  accommodations: [accommodationSchema],
  activities: [activitySchema],
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
})

const Itinerary = mongoose.model('Itinerary', itinerarySchema)

export { Itinerary }
