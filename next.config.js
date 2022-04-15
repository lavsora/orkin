module.exports = {
    reactStrictMode: true,
    images: {
      loader: 'imgix',
      path: process.env.NEXT_PUBLIC_BASE_PATH
    },

    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
