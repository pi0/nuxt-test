module.exports = {
  /*
  ** Modules
  */
  modules: [
    '~modules/test'
  ],
  plugins: [
    '~plugins/test.js',
    {src: '~plugins/test.js', ssr: false}
  ],
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#3B8070'},
  /*
   ** Build configuration
   */

  ssr: {
    runInNewContext: false
  },

  build: {
    extractCSS: true,
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    {src: '~/assets/app.css'},
  ],
}
