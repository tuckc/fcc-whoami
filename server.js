const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'];
  const lang = req.headers["accept-language"].split(',')[0];
  var os = (/.+(\(.+\)).+/gi).exec(req.headers['user-agent'])[1];
  os = os.replace('(', '');
  os = os.replace(')', '');
  
  const whoami = {
    ipaddress: ip,
    language: lang,
    software: os
  };
  
  res.json(whoami);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Example app listening on port 8080!');
});
