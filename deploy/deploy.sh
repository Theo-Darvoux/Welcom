#!/usr/bin/env bash
#
# Build the WELCOM static site and publish it to the nginx web root.
#
# Usage:
#   sudo ./deploy/deploy.sh
#
# Safe to re-run; it's idempotent. Override paths via env if your layout differs:
#   WEBROOT=/var/www/welcom  WEB_USER=www-data  ./deploy/deploy.sh
#
set -euo pipefail

# --- config -----------------------------------------------------------------
WEBROOT="${WEBROOT:-/var/www/welcom}"
WEB_USER="${WEB_USER:-www-data}"

# Resolve repo root from this script's location, so it works from any cwd.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
DIST_DIR="$REPO_DIR/dist"

# --- helpers ----------------------------------------------------------------
log()  { printf '\033[1;33m▶ %s\033[0m\n' "$*"; }
die()  { printf '\033[1;31m✗ %s\033[0m\n' "$*" >&2; exit 1; }

# We need root to write to the web root and reload nginx.
if [[ "${EUID}" -ne 0 ]]; then
  die "Run with sudo: sudo $0"
fi

command -v node  >/dev/null || die "node not found — install Node 18.20.8+/20.3+/22+"
command -v npm   >/dev/null || die "npm not found"
command -v rsync >/dev/null || die "rsync not found — sudo apt install rsync"

# --- build ------------------------------------------------------------------
cd "$REPO_DIR"
log "Installing dependencies (npm ci)…"
if [[ -f package-lock.json ]]; then
  npm ci
else
  npm install
fi

log "Building static site (npm run build)…"
npm run build
[[ -f "$DIST_DIR/index.html" ]] || die "Build produced no dist/index.html — aborting."

# --- publish ----------------------------------------------------------------
log "Publishing to $WEBROOT…"
mkdir -p "$WEBROOT"
# Trailing slash on source copies dist/ *contents* into the web root.
# --delete removes files that no longer exist in the new build.
rsync -a --delete "$DIST_DIR/" "$WEBROOT/"
chown -R "$WEB_USER:$WEB_USER" "$WEBROOT"

# --- reload nginx -----------------------------------------------------------
if command -v nginx >/dev/null; then
  log "Testing & reloading nginx…"
  nginx -t
  systemctl reload nginx
else
  log "nginx not found on PATH — skipping reload (content is already in place)."
fi

log "Done. Deployed $(find "$WEBROOT" -type f | wc -l) files to $WEBROOT."
