module.exports = {
  db: 'mongodb://localhost/bk-auth-test-scotch',
  sessionSecret: 'ilovescotchscotchyscotchscotch',
  'facebookAuth': {
    'clientID'      : '208122939543180', // your App ID
    'clientSecret'  : '9b8b49c39cc93084355b24ef18372dbf', // your App Secret
    'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
  },
  'googleAuth': {
    clientID: '570792281817-e4emq87q16n4s7fgo9ep4j8lv950d8g8.apps.googleusercontent.com',
    clientSecret: '1vTfS14EBub07kVAYa62l7q_',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  }
};