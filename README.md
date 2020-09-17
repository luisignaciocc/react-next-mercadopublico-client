# Next.js with TypeScript, Docker and PM2

## How to use

Build the Docker Image

```sh
docker build -t client .
```

Deploying the Docker container

```sh
docker run --name CLIENT_CONTAINER -p 0.0.0.0:3000:3000 client
```
