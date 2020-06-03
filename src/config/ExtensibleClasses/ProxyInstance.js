/* eslint-disable */
const generateGetHandler = require('../Middleware/generateGetHandler');

module.exports = function proxyInstance(context) {
    const { __namespace__ } = Object.getPrototypeOf(context);
    const namespacePlugins = window.plugins?.[__namespace__]?.['instance']?.['get'];
    if (!namespacePlugins) {
        return;
    }

    return new Proxy(context, {
        get: generateGetHandler('instance', __namespace__)
    });
};