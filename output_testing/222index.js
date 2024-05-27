'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = './cjs/use-sync-external-store.production.js' |> require(%);
} else {
  module.exports = './cjs/use-sync-external-store.development.js' |> require(%);
}