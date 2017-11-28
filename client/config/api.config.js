const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  baseUrl: isPro ? 'http://www.lao7.site/api/' : 'api/'
}
