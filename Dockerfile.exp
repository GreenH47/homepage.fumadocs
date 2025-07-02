# syntax=docker/dockerfile:1.4

########## deps: full install, cached ##########
FROM --platform=linux/arm64 node:20-bookworm-slim AS deps
WORKDIR /app
COPY package*.json source.config.ts next.config.mjs ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --progress=false

########## build: compile Next/Fumadocs ########
FROM deps AS build
WORKDIR /app
# Copy Tailwind, PostCSS, and other configs needed for the build
COPY tailwind.config.js postcss.config.mjs next-sitemap.config.js ./
# copy all source files (except those ignored by .dockerignore)
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN --mount=type=cache,target=.next/cache \
    npm run build

RUN npm prune --omit=dev --no-audit --progress=false

########## runtime: slim, prod-only ##########
FROM --platform=linux/arm64 node:20-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    LD_LIBRARY_PATH=/usr/lib:/usr/local/lib \
    npm_config_ignore_scripts=true

# Copy the minimal artifacts from the build stage
# 1️⃣  install prod-only deps (fully cached unless lock file changes)
COPY package*.json source.config.ts next.config.mjs ./
#RUN --mount=type=cache,target=/root/.npm \
#    npm ci --omit=dev --no-audit --progress=false --ignore-scripts

# 1️⃣  install prod-only deps (fully cached unless lock file changes)
COPY --from=build --chown=node:node /app/.next        ./.next
COPY --from=build --chown=node:node /app/public       ./public
# Fumadocs source cache
COPY --from=build --chown=node:node /app/.source         ./.
COPY --from=build --chown=node:node  /app/node_modules     ./node_modules
COPY --from=build --chown=node:node /app/next.config.mjs .


EXPOSE 3000
# (Optional) Use a non-root user for security
USER node
RUN mkdir -p .next/cache/images
#
CMD ["npm", "run", "start"]


