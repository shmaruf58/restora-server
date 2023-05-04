const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());



const allservice = require("./data/data.json")

app.get("/", (req, res) => {
  res.send('running');
});

app.get("/allData", (req, res) => {
  res.send(allservice);

});
app.get("/allData/:id", (req, res) => {
    const id = req.params.id;
    
    const item = allservice?.find((pd)=>pd.id== id);
    
   res.send(item);

});

app.listen(5000, () => {
  console.log("object");
});
