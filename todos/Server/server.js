const PORT = process.env.PORT ?? 8000;
const express = require('express');
 const { v4: uuidv4 } = require('uuid');
 const path = require("path");
 const serveStatic = require("serve-static");
const cors = require('cors');
const app = express();
const pool = require('./db');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


app.use(cors());
app.use(express.json());
app.use(serveStatic(path.join(__dirname, "client/build")));
// get all todos
app.get('/todos/:userEmail', async (req,res)=>{
  const {userEmail} = req.params;
  
  try {
    const todos = await pool.query(
      'SELECT * FROM todos WHERE user_email = $1',
      [userEmail]
    );
    res.json(todos.rows);
  } catch (error) {
    console.error(error);
  }
})

// create todo
app.post('/todos', async (req,res)=>{
  const { user_email, title, progress, description, category, date } = req.body;
  


  const id = uuidv4();
  try {
    const newTodo = await pool.query(
      `INSERT INTO todos(id, user_email, title,progress,description,category,date) VALUES($1, $2, $3,$4,$5,$6,$7)`,
      [id, user_email, title, progress, description, category, date]
    );
    res.json(newTodo)
  } catch (error) {
    console.error(error);
  }
})

// edit Todo

app.put('/todos/:id',async(req,res) =>{
  const { id } = req.params;

  const {user_email, title,description,category,progress,date} = req.body;
  try {
    const editTodo = await pool.query('UPDATE todos SET user_email = $1, title = $2, progress = $3, description = $4,category = $5 ,date = $6 WHERE id = $7',[user_email,title,progress,description,category,date,id])
    res.json(editTodo);
  } catch (error) {
    console.error(error)
  }
})

//Delete Todo
app.delete('/todos/:id',async(req,res)=>{
  const {id} = req.params;
  
  try {
    const deletTodo = await pool.query('DELETE FROM todos WHERE id = $1', [id])
    res.json(deletTodo)
    
  } catch (error) {
    console.error(error)
  }
})

// signup
app.post("/signup", async (req,res)=>{
  const {email, password} = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password,salt);
  try{
    const signUp = await pool.query(
      `INSERT INTO users (email, hashed_password) VALUES($1,$2)`,
      [email, hashedPassword]
    );
    const token = jwt.sign({email}, 'secret', {expiresIn:'1hr'})

    res.json({email, token})

  }catch(error){
    console.error(error)
    if(error){
      res.json({detail:error.detail})
    }
  }
})

// login 
app.post('/login',async(req,res)=>{
  const {email,password} = req.body;
  try {
    const users = await pool.query('SELECT * FROM users WHERE email = $1',[email])
    if(!users.rows.length) return res.json({detail : 'User does not exist!'})

    const success = await bcrypt.compare(password, users.rows[0].hashed_password);
    const token = jwt.sign({ email }, "secret", { expiresIn: "1hr" });

    if(success){
      res.json({'email': users.rows[0].email, token})
    }else{
      res.json({detail: "Login failed"})
    }
  } catch (error) {
    console.error(error)
  }
})
app.listen(PORT, ()=> console.log(`The server is run in the port ${PORT}`));