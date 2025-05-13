# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy environment variables and package files
# COPY .env.local .env.local
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Production Stage
FROM node:20-alpine AS runner

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=4000

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy necessary files from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json


# Expose the port
EXPOSE ${PORT}

# Start the application (bind to 0.0.0.0 so it's accessible outside the container)
CMD ["npm", "start", "--", "-H", "0.0.0.0"]
