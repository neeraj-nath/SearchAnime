import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
const config = {
    headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type' : 'application/vnd.api+json'
     },
  };

  app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));

app.get("/",(req,res) => {
    res.render("index.ejs");
});
app.post("/get-anime", async (req,res) =>{
    console.log(req.body);
    const result = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${req.body.animeName}&[categories]=${req.body.animeCategory}`);
    res.render("index.ejs",{
        results : result.data.data
    })
});
app.post("")
app.listen(port , () => {
    console.log(`SearchAnime server up and running on port ${port}`);
})