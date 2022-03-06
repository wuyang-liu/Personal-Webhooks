var express = require('express');
const axios = require('axios')
var router = express.Router();

// request for json
router.post('/', async (req, res, next) => {
  let {url} = req.body;
  const data = (await axios.get(url)).data;
  console.log("in proxy.js: ", data);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(data);
});

module.exports = router;
