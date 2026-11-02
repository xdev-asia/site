# xDev site

Source of [xdev.asia](https://xdev.asia), the website for [xDev](https://github.com/xdev-asia/xdev).

Next.js (App Router) with a static export: `pnpm build` writes plain files to `out/`, which Cloudflare Pages serves.

```sh
corepack pnpm install
corepack pnpm dev     # http://localhost:3000
corepack pnpm build   # static site in out/
```

## License

Apache-2.0. See `LICENSE`.
