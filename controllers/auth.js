const AuthService = require('../services/auth')

class AuthController {
  async login(req, res) {
    try{
      const {accesToken,usuarioToken} = await AuthService.sign(req.body);
      return res.status(200).json({ accesToken:accesToken,usuarioToken:usuarioToken});
    }catch(error){
      res.status(400).send(error)
    }        
  }

  async logout(req, res) {
    try{
      await AuthService.logout(req);
      return res.status(200).json('logout');
    }catch(error){
      throw  error
    }        
  }
  
}

module.exports = new AuthController();