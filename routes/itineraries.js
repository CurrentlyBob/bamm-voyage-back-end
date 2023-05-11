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
router.post('/:itineraryId/flights', checkAuth, itinerariesCtrl.createFlight)
router.post('/:itineraryId/accomodations', checkAuth, itinerariesCtrl.createAccomodation)
router.put('/:itineraryId', checkAuth, itinerariesCtrl.update)
router.put('/:itineraryId/flights/:flightId', checkAuth, itinerariesCtrl.updateFlight)
router.put('/:itineraryId/accomodations/:accomodationId', checkAuth, itinerariesCtrl.updateAccomodation)
router.delete('/:itineraryId', checkAuth, itinerariesCtrl.delete)
router.delete('/:itineraryId/flights/:flightId', checkAuth, itinerariesCtrl.deleteFlight)
router.delete('/:itineraryId/accomodations/:accomodationId', checkAuth, itinerariesCtrl.deleteAccomodation)


export { router }


