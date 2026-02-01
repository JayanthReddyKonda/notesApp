import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        // Use IP address for per-user limiting
        const identifier = req.ip || req.headers["x-forwarded-for"] || "anonymous";

        const { success } = await ratelimit.limit(identifier);
        if (!success) {
            return res.status(429).json({
                message: "Too many Requests"
            })
        }
        next();
    } catch (error) {
        console.log("Rate Limit Error", error);
        next(error);
    }
}
export default rateLimiter;