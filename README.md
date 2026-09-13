# AGI for Normies

A deliberately small, analogy-first guide to the causal chain from **data → learning → neural networks → language models → reasoning → tools → agents → harnesses → real-world work → robotics → AGI**.

The live slice contains the map and the first block, **Data**. It is intentionally not a full curriculum.

## Run locally

```bash
npm install
npm run dev -- --port 43123
```

Open `http://localhost:43123`.

## Checks and production build

```bash
npm run lint
npm run build
```

The production build is a static export in `out/`, so it needs no server runtime or secrets.

## Deploy to Cloudflare Pages

The repository includes `wrangler.toml` and a deploy script.

### Git integration

Configure this as a **Pages/static assets** build, not a Worker:

- Build command: `npm run build`
- Deploy command: `npx wrangler pages deploy ./out`
- Build output directory: `out`

The build produces the static site in `out/`. Do not use `npx wrangler deploy`: that is the Worker deployment command and expects a Worker entry point or assets configuration.

### Manual deployment

1. Authenticate once with an account that has access to the Cloudflare account which owns `agifornormies.com`:

   ```bash
   npx wrangler login
   ```

   For CI instead, set `CLOUDFLARE_API_TOKEN` (Pages Edit permission) and `CLOUDFLARE_ACCOUNT_ID`.
2. Create the Pages project once (skip this if it already exists):

   ```bash
   npm run cf:project
   ```
3. Deploy:

   ```bash
   npm run deploy
   ```

   This updates the `agifornormies` Pages project and prints its `*.pages.dev` URL.
4. In **Cloudflare Dashboard → Workers & Pages → agifornormies → Custom domains**, add `agifornormies.com` and optionally `www.agifornormies.com`.
5. The apex domain (`agifornormies.com`) must have an active Cloudflare DNS zone. If the registrar is not already using Cloudflare nameservers, add the zone in Cloudflare and change the domain’s nameservers to the two values Cloudflare assigns. The Pages domain setup then creates the required DNS record.

The custom domain cannot be attached without credentials for the Cloudflare account and control of the domain’s DNS zone.
