module.exports = {
  extends: "@snowpack/app-scripts-svelte",
  plugins: [
    [
      "snowpack-plugin-baseurl-handler",
      {
        "exts": [
          ".html",
          ".js",
          ".css"
        ],
        "baseUrl": "/svelte-three-mograph"
      }
    ]
  ],
  buildOptions: {
    out: 'docs'
  },
};
