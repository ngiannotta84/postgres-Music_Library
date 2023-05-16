const { Router } = require ('express')
const router = Router();
const artistController= require ('../controllers/artist')
 
router
  .post("/", artistController.createArtist)
  .get("/",artistController.readArtist)

  module.exports = router;