# AGI for Normies

A deliberately small, analogy-first guide to the causal chain from **data → learning → neural networks → language models → reasoning → memory → tools → agents → harnesses → senses → robotics → AGI**.

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

## Deploy to Cloudflare

This is a static Next.js export. On Cloudflare it should be a **Worker with static assets** (Workers Builds), not a classic Pages Git project.

`wrangler.toml` points assets at `out/`. Git-connected builds need:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Workers Builds always requires a deploy command. `npx wrangler pages deploy` will fail there: the injected API token can publish Workers, not Pages projects.

### Manual deployment

1. Authenticate once with an account that has access to the Cloudflare account which owns `agifornormies.com`:

   ```bash
   npx wrangler login
   ```

   For CI instead, set `CLOUDFLARE_API_TOKEN` (Workers Scripts Edit) and `CLOUDFLARE_ACCOUNT_ID`.
2. Deploy:

   ```bash
   npm run deploy
   ```

   This uploads `out/` as Worker static assets and prints the `*.workers.dev` URL.
3. In **Cloudflare Dashboard → Workers & Pages → agifornormies → Custom domains**, add `agifornormies.com` and optionally `www.agifornormies.com`.
4. The apex domain (`agifornormies.com`) must have an active Cloudflare DNS zone. If the registrar is not already using Cloudflare nameservers, add the zone in Cloudflare and change the domain’s nameservers to the two values Cloudflare assigns.

The custom domain cannot be attached without credentials for the Cloudflare account and control of the domain’s DNS zone.
