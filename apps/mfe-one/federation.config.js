const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');


module.exports = withNativeFederation({

  name: 'mfe-one',



  exposes: {
    './module': 'apps/mfe-one/src/app/app.module.ts',
    './mfe-one-comp': 'apps/mfe-one/src/app/components/mfe-one-comp.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
