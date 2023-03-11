const validateCreatedAt = (req, res, next) => {
  const { description: { createdAt}} = req.body;
  const format = /^\d{2}\/\d{2}\/\d{4}$/;
  if(!format.test(createdAt)) return res.status(400).json({message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'"})
  return next()
}

module.exports = validateCreatedAt;