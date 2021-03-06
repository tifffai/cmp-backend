const express = require('express');
const router = express.Router();

// GET root
router.get('/', (req,res) => {
    res.send("Welcome to capture mortgage plus root page")
});

//  GET mortgages
router.use('/leads', require('./leads.js'));
router.use('/lodgements', require('./lodgements.js'))
router.use('/approvals', require('./approvals.js'))
router.use('/settlements', require('./settlements.js'))
router.use('/crm', require('./crm'))

// //Get navbar dashboard data
router.use('/navbar', require('./navbar.js'))

module.exports = router;