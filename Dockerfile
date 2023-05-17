# Use the official Node.js 16 (LTS) base image
FROM node:latest

# Set a working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Delete package.json and package-lock.json
RUN rm package*.json

# Expose the port that Next.js uses
EXPOSE 3000

# Set the default command to run the container
CMD ["/bin/sh"]

# Docker build and run code for dev environment
# docker build -t nextjs-dev .
# docker run -it -p 3000:3000 -v ${PWD}:/app --name nextapp nextjs-dev