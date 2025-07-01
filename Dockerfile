# Use a smaller base image
FROM --platform=linux/arm64 greenh47/homepage-fumadocs:nextjs_base

# Set the working directory
WORKDIR /app

ENV PATH=/app/node_modules/.bin:$PATH

# Copy the rest of the application code
COPY . .

ENV NODE_ENV=production

#RUN npm build

# Expose the port
EXPOSE 3000

RUN npm build

# Start the application
CMD ["npm","run","start"]

