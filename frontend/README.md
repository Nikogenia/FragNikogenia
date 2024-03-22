# Frag Nikogenia - Frontend
frontend built with NextJS

### Development

##### Next JS

Install dependencies \
`npm install`

Start development server \
`npm run dev`

##### Docker

Build development image \
`docker build -t nikogenia/fng-frontend:dev .`

Run development image \
`docker run --name fng-frontend -p 3000:3000 --rm nikogenia/fng-frontend:dev`

Remove dangling images \
`docker image prune`

### Deployment

##### Build

Create builder \
`docker buildx create --name builder1`

Use builder \
`docker buildx use builder1`

Start builder \
`docker buildx inspect --bootstrap`

Build production image \
`docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t nikogenia/fng-frontend:latest -t nikogenia/fng-frontend:version --push .`

##### Stack

It is **highly recommended** to launch the **full stack** with the
**docker compose file** at the root of this project! See the full
documentation in the main README ...

##### Manual

Run production image \
`docker run --name fng-frontend nikogenia/fng-frontend`
