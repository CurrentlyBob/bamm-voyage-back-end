import { Profile } from "../models/profile.js";
import { Itinerary } from "../models/itinerary.js";


async function create(req, res) {
  try {
    req.body.owner= req.user.profile
    const itinerary= await Itinerary.create(req.body)
    res.status(201).json(itinerary)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function index(req, res) {
  try {
    const itinerary= await Itinerary.find({owner: req.user.profile})
    // .sort SORT BY START DATE 
    res.status(201).json(itinerary)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function show(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function update(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function deleteItinerary(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function createFlight(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function updateFlight(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function updateAccommodation(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function createAccommodation(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function deleteFlight(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function deleteAccommodation(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
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
}
