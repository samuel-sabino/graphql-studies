FROM node:14 as builder

COPY ./package*.json ./

RUN npm install

FROM node:14

# Create app directory
WORKDIR /app/graphql-studies

COPY --from=builder node_modules node_modules

COPY ./ ./

CMD ["npm", "run", "start"]