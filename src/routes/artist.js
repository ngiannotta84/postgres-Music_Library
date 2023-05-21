const { Router } = require ('express')
const router = Router();
const artistController= require ('../controllers/artist')
 
router
  .post("/", artistController.createArtist)
  .get("/",artistController.readAllArtists)
  .get("/:id",artistController.readArtistById)
  .patch("/:id",artistController.patchArtist)
  .delete("/:id",artistController.deleteArtist)

  module.exports = router;