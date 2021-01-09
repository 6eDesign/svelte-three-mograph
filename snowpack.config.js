module.exports = {
  extends: "@snowpack/app-scripts-svelte",
  plugins: [
    "@snowpack/plugin-webpack",
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

// module.exports = {
//   plugins: [
//     '@snowpack/plugin-svelte',
//     [
//       "snowpack-plugin-baseurl-handler",
//       {
//         "exts": [
//           ".html",
//           ".js",
//           ".css"
//         ],
//         "baseUrl": "/svelte-three-mograph"
//       }
//     ]
//   ],
//   buildOptions: {
//     out: 'docs'
//   },
//   mount: {
//     public: '/',
//     src: '/_dist_',
//   }
// };
