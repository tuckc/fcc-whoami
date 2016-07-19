const express = require('express');
const moment = require('moment');
const app = express();

app.get('/', (req, res) => {
  res.send("Enter a date or unix timestamp");
});

app.get('/*', (req, res) => {
  var date;
  var obj = { 
    unix: null,
    natural: null
  };
  if(!(/[a-z]+/gi).test(req.params[0])) {
    date = moment.unix(req.params[0]);
    if(date.isValid()) {
      obj.natural = date.format("MMMM D, YYYY");
      obj.unix = req.params[0];
    }
  } else {
    date = moment(req.params[0], ["MMMM D, YYYY"]);
    if(date.isValid()) {
      obj.natural = date.format("MMMM D, YYYY");
      obj.unix = date.format("X");
    }
  }
  res.json(obj);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Example app listening on port 8080!');
});

