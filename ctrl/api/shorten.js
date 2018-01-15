const Url = require('../../mdl/url');

module.exports = (req, res) =>
{
  const { url } = req.query;
  let found = Url.findById( url );
  if ( !found ) found = Url.add( url );
  res.redirect( 301, `/u/${found}?wait=${url}` );
};
