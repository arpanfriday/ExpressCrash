const express = require('express');
const router = express.Router();
const members = require('../../Members');

// Get all members
router.get('/', (req, res) => {
    console.log(members);
    res.json(members);
})

// Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => {
        // console.log("url:", parseInt(req.params.id), "member.id:", member.id);
        return member.id === parseInt(req.params.id);
    })
    console.log(found);
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({
            msg: `Member not found with id ${req.params.id}`
        })
    }
})

module.exports = router;