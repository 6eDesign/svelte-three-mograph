/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-svelte',
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
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    out: 'docs'
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
