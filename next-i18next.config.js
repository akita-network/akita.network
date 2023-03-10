const path = require("path");

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'cn', 'tr', 'es'],
        localeDetection: false,
        localePath: path.resolve('./public/locales')
    },
}