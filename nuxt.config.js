module.exports = {
  mode:'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'User | OpenTrip',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'opentrip user website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  plugins:['~/plugins/element-ui'],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Build configuration
  */

  build: {
    vendor:['axios']

    /*
    ** Run ESLINT on save
    */
  }
}
