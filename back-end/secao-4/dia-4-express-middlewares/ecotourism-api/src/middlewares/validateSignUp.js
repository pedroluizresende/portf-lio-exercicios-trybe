const validateSignUp = (req, res, next) => {
  const { email, senha, nome, telefone } = req.body;
  if([email, senha, nome, telefone].includes(undefined)) {
    return res.status(401).json({message: 'Campos ausentes!'});
  }
  next()
}

module.exports = validateSignUp;