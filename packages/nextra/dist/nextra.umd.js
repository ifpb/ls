(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('remark-gfm'), require('path'), require('graceful-fs'), require('child_process'), require('util'), require('download'), require('remark'), require('strip-markdown')) :
  typeof define === 'function' && define.amd ? define(['remark-gfm', 'path', 'graceful-fs', 'child_process', 'util', 'download', 'remark', 'strip-markdown'], factory) :
  (global = global || self, global.nextra = factory(global.remarkGfm, global.path, global.gracefulFs, global.childProcess, global.util, global.download, global.remark, global.stripMarkdown));
}(this, (function (remarkGfm, path, gracefulFs, cp, util, download, remark, strip) {
  remarkGfm = remarkGfm && Object.prototype.hasOwnProperty.call(remarkGfm, 'default') ? remarkGfm['default'] : remarkGfm;
  path = path && Object.prototype.hasOwnProperty.call(path, 'default') ? path['default'] : path;
  cp = cp && Object.prototype.hasOwnProperty.call(cp, 'default') ? cp['default'] : cp;
  download = download && Object.prototype.hasOwnProperty.call(download, 'default') ? download['default'] : download;
  remark = remark && Object.prototype.hasOwnProperty.call(remark, 'default') ? remark['default'] : remark;
  strip = strip && Object.prototype.hasOwnProperty.call(strip, 'default') ? strip['default'] : strip;

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  const execFile = util.promisify(cp.execFile);
  const isProduction = process.env.NODE_ENV === 'production';
  const STORK_WASM = 'https://github.com/jameslittle230/stork/releases/download/v1.1.0/stork.wasm';
  let indexed = false;
  async function buildStorkIndex(storkPath, locales) {
    if (indexed) return;
    if (!isProduction) return;
    indexed = true;
    const assetDir = path.join(process.cwd(), 'public');
    locales = locales || ['default'];

    for (const locale of locales) {
      const tomlFile = path.join(assetDir, `index-${locale}.toml`);
      let toml = await gracefulFs.promises.readFile(tomlFile, 'utf-8');
      toml += '[output]\n';
      toml += `filename = "${path.join(assetDir, `index-${locale}.st`)}"\n`;
      toml += `excerpts_per_result = 1\n`;
      await gracefulFs.promises.writeFile(tomlFile, toml);
      await execFile(storkPath, ['--build', tomlFile]);
      console.log(`Finished Stork index for locale: ${locale}`);
    } // download wasm


    const storkWasmPath = path.join(assetDir, 'stork.wasm');

    try {
      gracefulFs.statSync(storkWasmPath);
    } catch (err) {
      console.log('No stork.wasm found, downloading from GitHub...');
      await download(STORK_WASM, assetDir);
    }
  }

  const defaultExtensions = ['js', 'jsx', 'ts', 'tsx'];
  const markdownExtensions = ['md', 'mdx'];
  const markdownExtensionTest = /\.mdx?$/;
  const STORK_PATH = process.env.STORK_PATH || 'stork';
  var index = ((...args) => (nextConfig = {}) => {
    const nextraConfig = typeof args[0] === 'string' ? {
      theme: args[0],
      themeConfig: args[1]
    } : args[0];
    const locales = nextConfig.i18n ? nextConfig.i18n.locales : null;
    const defaultLocale = nextConfig.i18n ? nextConfig.i18n.defaultLocale : null;
    let pageExtensions = nextConfig.pageExtensions || [...defaultExtensions];

    if (locales) {
      console.log('You have i18n enabled for Nextra.');

      if (!defaultLocale) {
        console.error('Default locale is missing.');
      }

      pageExtensions = pageExtensions.concat(markdownExtensions.map(ext => defaultLocale + '.' + ext));
    } else {
      pageExtensions = pageExtensions.concat(markdownExtensions);
    }

    if (nextraConfig.unstable_stork) {
      console.log('You have Stork indexing enabled for Nextra. Stork binary:', STORK_PATH); // Add header for .st

      const originalHeaders = nextConfig.headers || (() => []);

      nextConfig.headers = async () => {
        return [...(await originalHeaders()), {
          source: `/:index(index-.+\.st)`,
          headers: [{
            key: 'content-type',
            value: 'application/wasm'
          }]
        }];
      };
    }

    return Object.assign({}, nextConfig, {
      pageExtensions,

      webpack(config, options) {
        config.module.rules.push({
          test: markdownExtensionTest,
          use: [options.defaultLoaders.babel, {
            loader: '@mdx-js/loader',
            options: _extends({}, nextraConfig.mdxOptions, {
              remarkPlugins: (nextraConfig.mdxOptions && nextraConfig.mdxOptions.remarkPlugins ? nextraConfig.mdxOptions.remarkPlugins : []).concat([remarkGfm])
            })
          }, {
            loader: 'nextra/loader',
            options: _extends({}, nextraConfig, {
              locales,
              defaultLocale
            })
          }]
        });
        if (!config.plugins) config.plugins = [];

        if (nextraConfig.unstable_stork) {
          config.plugins.push({
            apply: compiler => {
              compiler.hooks.done.tap('buildStorkIndex', () => {
                buildStorkIndex(STORK_PATH, locales);
              });
            }
          });
        }

        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, options);
        }

        return config;
      }

    });
  });

  return index;

})));
