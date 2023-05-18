import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as itinerariesCtrl from '../controllers/itineraries.js'

const router = Router()

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, itinerariesCtrl.index)
router.get('/:itineraryId', checkAuth, itinerariesCtrl.show)
router.post('/', checkAuth, itinerariesCtrl.create)
router.post('/:itineraryId/activities', checkAuth, itinerariesCtrl.createActivity)
router.post('/:itineraryId/flights', checkAuth, itinerariesCtrl.createFlight)
router.post('/:itineraryId/accommodations', checkAuth, itinerariesCtrl.createAccommodation)
router.put('/:itineraryId', checkAuth, itinerariesCtrl.update)
router.put('/:itineraryId/flights/:flightId', checkAuth, itinerariesCtrl.updateFlight)
router.put('/:itineraryId/accommodations/:accommodationId', checkAuth, itinerariesCtrl.updateAccommodation)
router.put('/:itineraryId/activities/:activityId', checkAuth, itinerariesCtrl.updateActivity)
router.delete('/:itineraryId', checkAuth, itinerariesCtrl.delete)
router.delete('/:itineraryId/flights/:flightId', checkAuth, itinerariesCtrl.deleteFlight)
router.delete('/:itineraryId/accommodations/:accommodationId', checkAuth, itinerariesCtrl.deleteAccommodation)
router.delete('/:itineraryId/activities/:activityId', checkAuth, itinerariesCtrl.deleteActivity)

export { router }
