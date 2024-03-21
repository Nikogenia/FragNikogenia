# Frag Nikogenia - Redis
database powered by Redis

### Development

##### Docker

Run development instance
`docker run --name fng-redis -v path/test/redis:/data -p 6379:6379 -d redis redis-server --save 60 1`

### Deployment

Run production instance
`docker run --name fng-redis -v /root/fng/redis:/data -p 6379:6379 -d redis redis-server --save 60 1`
