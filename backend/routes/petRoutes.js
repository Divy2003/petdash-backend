const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const upload = require('../middlewares/uploadImage');
const { createPetProfile, updatePetProfile, getPetProfile, getAllPets } = require('../controllers/petController');

// Create Pet Profile
router.post('/create', auth, upload.single('profileImage'), createPetProfile);

// Update Pet Profile
router.put('/update/:id', auth, upload.single('profileImage'), updatePetProfile);

// Get All Pets
router.get('/all', auth, getAllPets);

// Get Pet Profile
router.get('/:id', auth, getPetProfile);



module.exports = router; 