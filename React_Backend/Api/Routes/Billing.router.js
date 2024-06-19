const router = require('express').Router();
const { getAllBillings, createBilling, getOneBilling, updateBilling, deleteBilling } = require('../Controllers/Billing.controllers');

router.get('', getAllBillings);
router.get('/:id', getOneBilling);
router.put('/:id', updateBilling);
router.delete('/:id', deleteBilling)
router.post('', createBilling);


module.exports = router;