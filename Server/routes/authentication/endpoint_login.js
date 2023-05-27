const express = require('express')
const jwt = require('jsonwebtoken')
const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
  const { username, password } = req.body; 
  connection.query(`SELECT * FROM Administrator WHERE Username = '${username}' AND Password = '${password}'`, async (err, result) => {
        if (err) {
            console.log(err);
            res.send("Errorrrr"); 
            
        }
        else {
          if(result.length <= 0){
            res.send('User not found!')  
          }else{
            const [ user ] = result;
            const token = await jwt.sign({ id: user.id, username: user.Username }, "helloNe") 
            console.log(token)
            res.cookie("token", token, ).json(user);      
          } 
        }
    }); 
  // if(username === "" && password === ""){ 
  //   const token = await jwt.sign({ id: 0, username })
  //   res.cookie("token", token);    
  //   return res.send('Loggin successfully!')
  // }
  //  return res.send('User not found!')  
}) 



module.exports = authRouter;