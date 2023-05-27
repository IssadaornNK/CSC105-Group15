const express = require('express')
const jwt = require('jsonwebtoken')
const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body; 
  connection.query(`SELECT * FROM User WHERE email = '${email}' AND password = '${password}'`, async (err, result) => {
        if (err) {
            console.log(err);
            console.log("kuy")
            res.send("Error"); 
            
        }
        else {
          if(result.length <= 0){
            res.send('User not found!')  
          }else{
            const [ user ] = result;
            // const token = await jwt.sign({ id: user.id, email: user.email }, "helloNe") 
            // console.log(token)
            res.cookie("token", user.id, ).json(user);      
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