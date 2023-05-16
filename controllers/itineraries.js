import { Profile } from "../models/profile.js";
import { Itinerary } from "../models/itinerary.js";

async function create(req, res) {
  try {
    req.body.owner = req.user.profile;
    const itinerary = await Itinerary.create(req.body);
    res.status(201).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function index(req, res) {
  try {
    const itinerary = await Itinerary.find({ owner: req.user.profile });
    itinerary.sort((a, b) => a.startDate - b.startDate)
    res.status(201).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function show(req, res) {
  try {
    const itinerary = await Itinerary.findById(req.params.itineraryId);
    const sortedObj = itinerary.flights.reduce((obj, flight) =>{
      if (obj[flight.recordLocator]) {
        obj[flight.recordLocator] = [...obj[flight.recordLocator], flight]
      } else {
        obj[flight.recordLocator] = [flight]
      }
      return obj
    }, {})

    itinerary.flights = Object.values(sortedObj).flat()
    res.status(200).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function update(req, res) {
  try {
    const itinerary = await Itinerary.findByIdAndUpdate(
      req.params.itineraryId,
      req.body,
      { new: true }
    );
    res.status(200).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function deleteItinerary(req, res) {
  try {
    const itinerary = await Itinerary.findByIdAndDelete(req.params.itineraryId);
    res.status(200).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function createFlight(req, res) {
  try {
    req.body.roundtrip = !!req.body.roundtrip
    const itinerary = await Itinerary.findById(req.params.itineraryId);
    itinerary.flights.push(req.body);
    await itinerary.save();
    const flights = itinerary.flights[itinerary.flights.length - 1];
    res.status(201).json(flights);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function updateFlight(req, res) {
  try {
    req.body.roundtrip = !!req.body.roundtrip
    const itinerary = await Itinerary.findById(req.params.itineraryId);
    const flight = itinerary.flights.id(req.params.flightId);
    flight.set(req.body);
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function updateAccommodation(req, res) {
  try {
    const itinerary = await Itinerary.findById(req.params.itineraryId);
    const accommodation = itinerary.accommodations.id(
      req.params.accommodationId
    );
    accommodation.set(req.body);
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function createAccommodation(req, res) {
  try {
    const itinerary = await Itinerary.findById(req.params.itineraryId);
    itinerary.accommodations.push(req.body);
    await itinerary.save();
    const accommodations =
      itinerary.accommodations[itinerary.accommodations.length - 1];
    res.status(201).json(accommodations);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function deleteFlight(req, res) {
  try {
    const itinerary = await Itinerary.findById(req.params.itineraryId);
    itinerary.flights.remove({ _id: req.params.flightId });
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function deleteAccommodation(req, res) {
  try {
    const itinerary = await Itinerary.findById(req.params.itineraryId);
    itinerary.accommodations.remove({ _id: req.params.accommodationId });
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function createActivity(req, res) {
  try {
    const itinerary = await Itinerary.findById(req.params.itineraryId);
    itinerary.activities.push(req.body);
    await itinerary.save();
    const activities =
      itinerary.activities[itinerary.activities.length - 1];
    res.status(201).json(activities);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function updateActivity(req, res) {
  try {
    const itinerary = await Itinerary.findById(req.params.itineraryId);
    const activity = itinerary.activities.id(
      req.params.activityId
    );
    activity.set(req.body);
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function deleteActivity(req, res) {
  try {
    const itinerary = await Itinerary.findById(req.params.itineraryId);
    itinerary.activities.remove({ _id: req.params.activityId });
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export {
  create,
  index,
  show,
  update,
  deleteItinerary as delete,
  createFlight,
  createAccommodation,
  updateFlight,
  updateAccommodation,
  deleteFlight,
  deleteAccommodation,
  createActivity,
  updateActivity,
  deleteActivity,
};
