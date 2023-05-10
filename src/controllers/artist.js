const createArtist = (req,res) => {
  const { name, genre } = req.body;
  res.status(201).json({name, genre});
}
module.exports = {createArtist};