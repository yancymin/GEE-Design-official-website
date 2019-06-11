module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/GEE-Design-official-website/' : '/',
  devServer: {
    port: 8888,
    host: '0.0.0.0',
    open: true
  }
}
