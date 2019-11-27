/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574836892078_4993';

  // add your middleware config here
  config.middleware = [];

  // 框架的安全插件是默认开启的，如果我们想关闭其中一些安全防范，直接设置该项的 enable 属性为 false 即可
  config.security = {
    csrf: {
      enable: false,
    },
  };

  //模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
