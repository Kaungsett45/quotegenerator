import express from "express";
import cors from "cors";
import connection from "./db.js";

const app = new express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running with index");
});
//Register user
app.post("/register", async (req, res) => {
    try{
  const query = "insert into User(username,email,password)values(?,?,?)";

   await connection.query(query, [
    req.body.username, 
    req.body.email, 
    req.body.password]); 

    res.send("Data Inserted Successfully!");
  }catch(error){
    console.error(error);
    res.status(500).send("An error occurred");
  }
})

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
