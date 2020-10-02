const loadExpressMiddleware = require('./express.loader');

function loaders({ app }) {
  console.log('loaders start');

  // * application level middleware
  loadExpressMiddleware({ app });
  console.log('loaders finish');
}

module.exports = loaders;