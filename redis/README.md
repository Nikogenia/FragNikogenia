# Frag Nikogenia - Redis
database powered by Redis

### Development

##### Docker

Run development instance \
`docker run --name fng-redis -v /root/fng/redis:/data -p 6379:6379 -e REDIS_ARGS="--save 60 1 --requirepass pleasechangeme" --rm -d redis/redis-stack-server`

### Deployment

##### Stack

It is **highly recommended** to launch the **full stack** with the
**docker compose file** at the root of this project! See the full
documentation in the main README ...

##### Manual

Run production instance \
`docker run --name fng-redis -v /root/fng/redis:/data -p 6379:6379 -e REDIS_ARGS="--save 60 1 --requirepass pleasechangeme" -d redis/redis-stack-server`
