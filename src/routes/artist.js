const { Router } = require ('express')
const router = Router();
const artistController= require ('../controllers/artist')
 
router
  .post("/", artistController.createArtist)

  module.exports = router;