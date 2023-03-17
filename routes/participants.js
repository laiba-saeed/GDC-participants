const express = require('express');
const { Participant } = require('../models/participants');
const router = express.Router();

// GET all participants
router.get('/', async (req, res) => {
    try {
        const participants = await Participant.find();
        if(!participants || participants.length === 0) {
            return res.status(404).json({ 
                success: false, 
                error: "No participants found", 
                body: null 
            });
        }
        res.status(200).json({ 
            success: true, 
            error: null, 
            body: participants 
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ 
            success: false, 
            error: "Server Error", 
            body: null 
        });
    }
});

// POST a new participant
router.post('/', async (req, res) => {
    try {
        const participant = new Participant({
            name: req.body.name,
            email: req.body.email,
            bio: req.body.bio
        });
        await participant.save();
        res.status(201).json({ 
            success: true, 
            error: null, 
            body: participant 
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ 
            success: false, 
            error: "Server Error", 
            body: null 
        });
    }
});

// DELETE a participant by ID
router.delete('/:id', async (req, res) => {
    try {
        const participant = await Participant.findByIdAndRemove(req.params.id);
        if(!participant) {
            return res.status(404).json({ 
                success: false, 
                error: "Participant not found", 
                body: null 
            });
        }
        res.status(200).json({ 
            success: true, 
            error: null, 
            body: participant 
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ 
            success: false, 
            error: "Server Error", 
            body: null 
        });
    }
});

module.exports = router;