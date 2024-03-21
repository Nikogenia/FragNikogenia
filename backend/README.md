# Frag Nikogenia - Backend
backend built with FastAPI

### Development

##### Python

Create virtual environment
`python -m venv venv`

Activate virtual environment
`./venv/Scripts/activate`

Install dependencies
`pip install -r requirements.txt`

Start server with reload enabled
`python main.py --reload`

##### Docker

Build development image
`docker build -t nikogenia/fng-backend:dev .`

Run development image
`docker run --name fng-backend -p 8080:8080 --rm nikogenia/fng-backend:dev`

Remove dangling images
`docker image prune`

### Deployment

Create builder
`docker buildx create --name builder1`

Use builder
`docker buildx use builder1`

Start builder
`docker buildx inspect --bootstrap`

Build production image
`docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t nikogenia/fng-backend:latest -t nikogenia/fng-backend:version --push .`

Run production image
`docker run --name fng-backend nikogenia/fng-backend`
