const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DEV = process.env.NODE_ENV == 'development';

// const plugins =
// [ new CopyWebpackPlugin([
//     { from: 'src/assets/img/'
//     , to: 'img/'
//     , toType: 'dir'
//     }
//   ])
//   , new CopyWebpackPlugin([
//     { from: 'src/manifest.json'
//     , transform: (content, path) =>
//       { const override =
//         { name: `Perpetuum Awesome${DEV ? ' | DEV' : ''}`
//         , description: process.env.npm_package_description
//         , version: process.env.npm_package_version
//         , ...JSON.parse(content.toString())
//         }

//         if(DEV)
//         { override.content_security_policy =
//           "script-src 'self' 'unsafe-eval'; object-src 'self'";

//           override.background.scripts.push('hot-reload.js');          
//         }
        
//         const composed = JSON.stringify(
//         override, null, 2);

//         return Buffer.from(composed);
//       }
//     }
//   , { from: 'src/background.js'
//     , to: './'
//     , toType: 'dir'
//     }
//   , { from: 'node_modules/ace-builds/src-min/ace.js'
//     , to: './lib/ace/'
//     , toType: 'dir'
//     }
//   , { from: 'node_modules/ace-builds/src-min/mode-javascript.js'
//     , to: './lib/ace/'
//     , toType: 'dir'
//     }
//   , { from: 'node_modules/ace-builds/src-min/worker-javascript.js'
//     , to: './lib/ace/'
//     , toType: 'dir'
//     }
//   , { from: 'node_modules/ace-builds/src-min/theme-twilight.js'
//     , to: './lib/ace/'
//     , toType: 'dir'
//     }
//   ])
// ];

module.exports =
{ pages:
  { screen:
    { entry: 'src/screen'
    }
  , controller:
    { entry: 'src/controller'
    }
  }
, filenameHashing: false
, chainWebpack: config =>
  { config.plugins.delete('html-testresults');
    config.plugins.delete('preload-testresults');
    config.plugins.delete('prefetch-testresults');
    config.plugins.delete('hmr');

    config.optimization.splitChunks(false);

    config
      .output
      .filename('js/[name].js')
	  	.chunkFilename('js/[name].js')
  }
, configureWebpack:
  { //plugins
    node:
    { global: false
    }
  }
, css:
  { extract: true
  }
, outputDir: path.join
  ( __dirname
  , 'build'
  , DEV ? 'dev' : 'dist'
  )
, productionSourceMap: false
}