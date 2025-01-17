export default {
  // //////////////////////////////////////////// Static Site Generation Options
  // ---------------------------------------------------------------------------
  target: 'static',
  // ///////////////////////////////////////////////////// Runtime Configuration
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------- [Runtime] Public
  publicRuntimeConfig: {
    nodeEnv: process.env.NODE_ENV,
    serverEnv: process.env.SERVER_ENV,
    seo: {
      siteName: 'Filecoin Foundation',
      siteUrl: 'https://fil.org'
    },
    redirects: [
      { from: '/filaustin', to: 'https://events.bizzabo.com/filaustin' },
      { from: '/board', to: '/about/#panel_1' },
      { from: '/careers', to: '/get-involved/#careers_intro' },
      { from: '/community', to: '/about/#dive_deeper_intro' },
      { from: '/contact', to: '/about/#site-footer' },
      { from: '/filplus', to: '/governance/#panel-3-title' },
      { from: '/fips', to: '/governance/#panel-1-title' },
      { from: '/philosophy', to: '/about/#intro_1' },
      { from: '/team', to: '/about/#panel_1' },
      { from: '/publicdata', to: '/public-data' },
      { from: '/publicdata/awards', to: '/public-data/awards' }
    ]
  },
  // --------------------------------------------------------- [Runtime] Private
  privateRuntimeConfig: {},
  // /////////////////////////////////////////////////////////// Server & Render
  // ---------------------------------------------------------------------------
  server: {
    port: 23000,
    host: process.env.NODE_ENV !== 'development' ? '0.0.0.0' : 'localhost'
  },
  render: {
    bundleRenderer: {
      runInNewContext: false
    }
  },
  // /////////////////////////////////////////////////////// Headers of the Page
  // ---------------------------------------------------------------------------
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }
    ]
  },
  // ////////////////////////////////////////// Customize the progress-bar color
  // ---------------------------------------------------------------------------
  loading: {
    color: '#292929',
    height: '4px'
  },
  // /////////////////////////////////////////////////////////// Global CSS/SCSS
  // ---------------------------------------------------------------------------
  css: [
    '~/assets/scss/main.scss'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss'
    ]
  },
  // /////////////////////////////////////////////////////// Nuxt.js Dev Modules
  // ---------------------------------------------------------------------------
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/moment-module#readme
    '@nuxtjs/moment'
  ],
  // /////////////////////////////////////////////////////////// Nuxt.js Modules
  // ---------------------------------------------------------------------------
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/agency-undone/au-nuxt-module-zero
    '@agency-undone/au-nuxt-module-zero',
    // Doc: https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
    // Doc: https://content.nuxtjs.org
    '@nuxt/content',
    // https://github.com/agency-undone/nuxt-module-matomo
    '@agency-undone/nuxt-module-matomo',
    '~/modules/ipfs404'
  ],
  // ///////////////////////////////////////////////////// [Module] Nuxt-content
  // ---------------------------------------------------------------------------
  content: {
    markdown: {
      prism: {
        theme: false
      }
    }
  },
  // ///////////////////////////////////////////////////////////// [Module] Zero
  // ---------------------------------------------------------------------------
  zero: {
    core: {
      include: true,
      toaster: {
        display: 10,
        timeout: 5000
      }
    },
    filters: {
      include: true
    },
    pagination: {
      include: true
    }
  },
  // /////////////////////////////////////////////////////////// [Module] Matomo
  // ---------------------------------------------------------------------------
  matomo: {
    include: true,
    src: 'https://cdn.matomo.cloud/fil.matomo.cloud/container_b87GLHh8.js',
    routing: true,
    target: 'tag-manager'
  },
  // ///////////////////////////////////////////////////////// [Module] MomentJS
  // ---------------------- Doc: https://github.com/nuxt-community/moment-module
  moment: {
    timezone: true,
    defaultTimezone: 'UTC'
  },
  // //////////////////////////////////////////////////////////// [Module] Axios
  // -------------------------------------- See https://axios.nuxtjs.org/options
  axios: {},
  // ///////////////////////////////////////////////////////////// [Module] Zero
  // ------------------------------------------- Dox: https://sitemap.nuxtjs.org
  sitemap: {
    hostname: 'https://fil.org'
  },
  // /////////////////////////////////// Plugins to load before mounting the App
  // ---------------------------------------------------------------------------
  plugins: [],
  // /////////////////////////////////////////////////////// Router + Middleware
  // ---------------------------------------------------------------------------
  router: {},
  // //////////////////////////////////////////////////// Generate configuration
  generate: {
    fallback: '404.html'
  },
  // /////////////////////////////////////////////////////// Build configuration
  // ------------------------------------------------ Extend webpack config here
  build: {
    // ---------------------------------------------------------- Hot Middleware
    hotMiddleware: {
      client: {
        overlay: false
      }
    },
    // -------------------------------------------------------------- Extensions
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      })
    }
  }
}
