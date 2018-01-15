const express = require('express');

const router = express.Router();

const Url = require('../mdl/url');

router.get('/u/:short', ( req, res ) =>
{
  const reqWaitUrl = req.query.wait;
  if ( reqWaitUrl !== undefined )
    res.render('redirect-wait', { url: reqWaitUrl, shortUrl: Url.findById(reqWaitUrl) } );
  else
  {
    const url = Url.findByShortUrl( req.params.short );
    if ( !url ) return res.status(404).send('Not found');
    res.redirect(301, Url.findByShortUrl( req.params.short ) );
  }
});

module.exports = router;
