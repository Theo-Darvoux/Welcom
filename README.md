# WELCOM 2026

<p align="center">
  <img src="public/imgs/logo.webp" alt="WELCOM logo" width="180" />
</p>

The public website for [**Welcom'INT**](https://welcom-int.fr), the student association helping international students settle in at Télécom SudParis and IMT-BS on the Évry campus.

Built with [Astro](https://astro.build/), it is a static, multilingual guide to campus life, practical services, events, and the associative foyer.

## What’s included

- A responsive association website with guides for arriving, housing, transport, studies, daily life, money and phone plans, administrative aid, and events.
- An interactive foyer map and association information.
- Localized pages in English, French, Spanish, Brazilian Portuguese, Simplified Chinese, Traditional Chinese, Hindi, Vietnamese, and Arabic (including right-to-left layout).
- Static-site output ready to serve from nginx or any static hosting provider.

## Getting started

The project uses Node.js **22.22.2** (see [`.nvmrc`](.nvmrc)) and npm 10 or later.

```bash
nvm use
npm ci
npm run dev
```

Astro starts a local development server and prints its URL in the terminal. The default locale is English; other locales are served under paths such as `/fr/` and `/ar/`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run check` | Run Astro and TypeScript diagnostics. |
| `npm run lint` | Lint the source with ESLint. |
| `npm run build` | Create the production static site in `dist/`. |
| `npm run preview` | Preview the production build locally. |

Before opening a pull request, run:

```bash
npm run lint
npm run check
npm run build
```

## Project structure

```text
src/
  components/       Shared UI and page-body components
  data/             Structured site data, including foyer information
  i18n/             Locale registry, translations, and routing helpers
  layouts/          Shared Astro layouts
  pages/            Static and localized routes
  styles/           Global styles and design tokens
public/
  fonts/            Self-hosted web fonts
  imgs/             Site images and SVG illustrations
deploy/             nginx configuration and deployment script
```

Translations live in [`src/i18n/locales/`](src/i18n/locales/). The locale registry in [`src/i18n/config.ts`](src/i18n/config.ts) controls the supported language list, display names, and text direction.

## Deployment

`npm run build` produces a fully static site in `dist/`. For the provided nginx deployment workflow, review [`deploy/nginx.conf`](deploy/nginx.conf), then run the deployment script on the target host:

```bash
sudo ./deploy/deploy.sh
```

The script installs dependencies, builds the site, syncs `dist/` to `/var/www/welcom` by default, and reloads nginx. Set `WEBROOT` and `WEB_USER` if the target uses different paths or ownership.

### Automated production deployments

The CI workflow deploys a successful push to `main` over SSH. It fetches and fast-forwards `/opt/Welcom` to the exact commit that passed CI before running the existing deployment script.

**Create the GitHub environment and secrets.** In the repository, open **Settings → Environments**, create an environment named `production`, and add these environment secrets:

   | Secret | Value |
   | --- | --- |
   | `DEPLOY_HOST` | Your production server hostname or IP address. |
   | `DEPLOY_USER` | `assowelcom`. |
   | `DEPLOY_SSH_KEY` | The complete contents of `~/.ssh/welcom_github_actions` (the private key). |
   | `DEPLOY_KNOWN_HOSTS` | The verified `ssh-keyscan -H YOUR_SERVER_HOST` output. |

## License

This project is released under the [MIT License](LICENSE).
