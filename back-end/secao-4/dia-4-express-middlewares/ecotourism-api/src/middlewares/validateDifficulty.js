const validateDifficulty = (req, res, next) => {
  const difficulties = ['Fácil', 'Médio', 'Difícil']
  const { description: { difficulty}} = req.body;
  if(difficulties
    .every(d => d.toLowerCase() !== difficulty.toLowerCase())) {
      return res.status(400).json({message:"O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'"})
    }
    next()
}

module.exports = validateDifficulty;