'use strict';

const Express = require('express');
const appstore = require('app-store-scraper');

const router = Express.Router();

/* App detail*/
router.get('/apps/:appId', function (req, res, next) {
  const opts = Object.assign({ id: req.params.appId }, req.query);
  appstore.app(opts)
    .then(res.json.bind(res))
    .catch(next);
});

function errorHandler(err, req, res, next) {
  console.log(res);
  res.status(400).json({ message: err.message });
  next();
}

router.use(errorHandler);

module.exports = router;
