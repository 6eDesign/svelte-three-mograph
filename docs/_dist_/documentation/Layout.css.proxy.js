// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body{background:#eee;margin:0}.main-grid.svelte-ol68qr.svelte-ol68qr{display:grid;grid-template-areas:'header header header header header header'\n      'sidebar content content content content content';min-height:100vh;grid-template-rows:auto 1fr;grid-template-columns:220px auto}.header.svelte-ol68qr.svelte-ol68qr{padding:12px;display:grid;grid-template-columns:120px auto;grid-area:header;background:#333;color:#fff;box-shadow:0px 2px 22px 14px rgba(0, 0, 0, 0.11);height:120px;align-items:center;z-index:1;grid-gap:30px}.header-text.svelte-ol68qr.svelte-ol68qr{display:grid;grid-gap:3px}.header-text.svelte-ol68qr strong.svelte-ol68qr{font-size:1.3em}.header-text.svelte-ol68qr emphasis.svelte-ol68qr{font-weight:200;font-size:1.2em;color:greenyellow}.sidebar.svelte-ol68qr.svelte-ol68qr{grid-area:sidebar;background:#eee;padding:0;display:grid}.sidebar.svelte-ol68qr ul.svelte-ol68qr{list-style-type:none;margin:0;padding:18px 0 0 0}.sidebar.svelte-ol68qr li a.svelte-ol68qr{font-weight:bold;text-decoration:none;color:#333;height:28px;display:grid;align-items:center;transition:all 120ms ease-in-out;transform:scale(1);padding:12px 30px;border-bottom:1px solid #ccc;box-shadow:0px 2px 4px rgba(0, 0, 0, 0.1);background:#f7f4f4}.sidebar.svelte-ol68qr li a.svelte-ol68qr:hover{transform:scale(1.04);z-index:2}.content.svelte-ol68qr.svelte-ol68qr{grid-area:content}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}