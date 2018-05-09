// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    hmr       : false,
    firebase: {
    apiKey: 'AIzaSyBxc6B9DceXwXvMon6qH5V7_WbuKk_8DVE',
    authDomain: 'izo-portal.firebaseapp.com',
    databaseURL: 'https://izo-portal.firebaseio.com',
    projectId: 'izo-portal',
    storageBucket: 'izo-portal.appspot.com',
    messagingSenderId: '209932985020'
  }
};
