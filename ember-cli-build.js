/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app'),
      postCssNext = require('postcss-cssnext'),
      postCssImport = require('postcss-partial-import'),
      postCssPxToRem = require('postcss-pxtorem'),
      postCssMinMax = require('postcss-media-minmax'),
      postCssTransform = require('postcss-transform-shortcut');
      

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: postCssImport 
           },
           {
             module: postCssTransform
           },
           {
             module: postCssMinMax
           },
          {
            module: postCssPxToRem,
            options: {
              rootValue: 10,
              propList: ['*'],
              mediaQuery: true
            }
          },
          {
            module: postCssNext,
            options: {
              browsers: ['last 100 versions'],
            }
          }
        ]
      }
    }
   
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
