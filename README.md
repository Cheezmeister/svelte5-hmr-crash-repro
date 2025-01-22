# Describe the bug

After upgrading to Svelte 5 (previously 4.2.19), we began observing the following:

Page content renders once, then page crashes, becoming blank.

The problem goes away if we replace `<Icon icon={'logos:google-icon'} />` with something like `<span>I see you</span>`, but it does not seem to be caused by this specific component.

# Logs

(From Chrome)
```
Uncaught (in promise) TypeError: Cannot read properties of null (reading 'd')
    at onDestroy (index-server.js:9:11)
    at Icon (@iconify_svelte.js?v=a2e3ce57:1771:3)
    at hmr.js:47:51
    at update_reaction (runtime.js:403:53)
    at update_effect (runtime.js:529:18)
    at create_effect (effects.js:125:4)
    at branch (effects.js:370:9)
    at hmr.js:38:13
    at update_reaction (runtime.js:403:53)
    at update_effect (runtime.js:529:18)
```
(From Firefox)
```
Uncaught (in promise) TypeError: context is null
    onDestroy index-server.js:9
    Icon @iconify_svelte.js:1771
    effect2 hmr.js:47
    update_reaction runtime.js:403
    update_effect runtime.js:529
    create_effect effects.js:125
    branch effects.js:370
    wrapper hmr.js:38
    update_reaction runtime.js:403
    update_effect runtime.js:529
```

# System Info 

```
System:
  OS: macOS sonoma 14.6.1
  CPU: (8) arm64 Apple M2
  Memory: 8.00 GB
  Shell: zsh 5.9 (x86_64-apple-darwin23.0)
Binaries:
  Node: 23.6.0
  npm: 10.9.2
  v8: 12.9.202.28-node.12
Browsers:
  Chrome: 131.0.6778.265 (Official Build) (arm64)
  Firefox: 134.0.1 (aarch64)
NPM:
    "@iconify/svelte": "4.2.0",
    "@sveltejs/adapter-node": "5.2.11",
    "@sveltejs/kit": "2.15.2",
    "@sveltejs/vite-plugin-svelte": "5.0.0",
    "svelte": "5.16.2",
    "svelte-check": "4.1.4",
    "typescript": "5.7.2",
    "vite": "6.0.7",
    "vitest": "2.1.8"
```

# Severity

blocking an upgrade
