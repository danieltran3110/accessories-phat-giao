module.exports = {
  reactStrictMode: true,
  webpack: (cfg, { isServer }) => {
    cfg.module.rules.push({
                            test: /\.md$/,
                            loader: 'frontmatter-markdown-loader',
                            options: { mode: ['react-component'] },
                          });
    if (!isServer) {
      cfg.resolve.fallback = {
        fs: false,
      };
    }
    return cfg;
  },
};
