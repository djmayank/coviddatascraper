require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cheerio = require("cheerio");
const pretty = require("pretty");
const axios = require("axios");

const app = express();

const PORT = process.env.PORT || 3000;

const website = "https://www.mohfw.gov.in/";
const stateUrl = "https://www.mohfw.gov.in/data/datanew.json";

let urls = [website, stateUrl];
let requests = urls.map(url => axios(url));

let content = {};

Promise.all(requests).then(responses => {
  const stateWiseData = { ...responses[1].data };
  const realData = [];
  const data = responses[0].data;
  const $ = cheerio.load(data);
  $(".content", data).each(function () {
    const compiledData = [];
    $(".mob-hide").each((i, el) => {
      if (i < 6) {
        compiledData.push(pretty($(el).text()));
      }
    });

    const vaccCount = $(".coviddata").text();
    const vaccCountPer = $(".coviddataval")
      .text()
      .replace(/\(|\)|[ ]/g, "");

    realData.push({
      compiledData,
      vaccCount,
      vaccCountPer
    });
  });

  content = { ...content, realData, stateWiseData };
});

app.use(cors({ origin: "https://covid.mayankkhanna.in", credentials: true }));
app.get("/", (req, res) => {
  res.json(content);
});
app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});
