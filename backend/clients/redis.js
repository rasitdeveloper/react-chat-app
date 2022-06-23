const redis = require("redis");

const getClient = () => {
	return redis.createClient({
		host: process.env.REDIS_HOST || "localhost",
		port: process.env.REDIS_PORT || "6379",
		password: process.env.REDIS_PASS || "",
		db: 1,
	});
};

module.exports.getClient = getClient;