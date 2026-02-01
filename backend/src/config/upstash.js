import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

//Rate Limiter
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(20,"30 s")
})

export default ratelimit;


