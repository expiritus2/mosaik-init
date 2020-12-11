const { useBabelRc, override } = require('customize-cra');

module.exports = (config, env) => {
    // eslint-disable-next-line
    const overrideConfig = override(useBabelRc());

    return overrideConfig(config, env);
};
