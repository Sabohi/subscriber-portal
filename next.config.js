const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    // config.experiments = { topLevelAwait: true, layers: false };
    const advisorAppUrl = process.env.NEXT_PUBLIC_ADVISOR_APP_URL;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'subscriberApp',
        remotes: {
          advisor: `advisor@${advisorAppUrl}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './footer': './components/Footer.js',
          './nav': './components/Nav.js'
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig