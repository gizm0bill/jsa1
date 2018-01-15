const
  path = require('path'),
  chalk = require('chalk'),
  express = require('express'),
  passport = require('passport'),
  lusca = require('lusca'),
  bodyParser = require('body-parser'),
  compression = require('compression'),
  cors = require('cors'),
  expressValidator = require('express-validator');
;

const app = express();

app.set( 'host', '0.0.0.0' );
app.set( 'port', process.env.PORT || 8080 );
app.set( 'views', path.join(__dirname, 'views') );
app.set( 'view engine', 'pug' );
app.use( cors() );
app.use( compression() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( expressValidator() )
app.use( passport.initialize() );
app.use( passport.session() );
app.use( lusca.xframe('SAMEORIGIN'));
app.use( lusca.xssProtection(true));
app.use( (req, res, next) =>
{
  res.locals.user = req.user;
  next();
});
app.use( express.static(path.join(__dirname, 'ui/public'), { maxAge: 31557600000 }) );

const
  apiCtrl = require('./ctrl/api'),
  userCtrl = require('./ctrl/user')
  urlCtrl = require('./ctrl/url')

app.use(apiCtrl);
app.use(userCtrl);
app.use(urlCtrl);

app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;