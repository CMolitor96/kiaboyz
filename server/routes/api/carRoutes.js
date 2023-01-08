const router = require('express').Router();
const {
    carMake,
    carYear,
    carInfo
} = require('../../controllers/queries');

router.route('/make=:make').get(carMake);

router.route('/make=:make/model=:model').get(carYear);

router.route('/make=:make/model=:model/year=:year').get(carInfo);

module.exports = router;