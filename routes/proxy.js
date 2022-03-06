var express = require('express');
const axios = require('axios')
var router = express.Router();

// request for json
router.get('/', async (req, res, next) => {
  let {url} = req.body;
  const data = (await axios.get(url)).data;
  console.log("in proxy.js: ", data);
  res.send(data);
});

module.exports = router;
