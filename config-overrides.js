const path = require("path");

module.exports = (config) => {
	config.resolve.alias = {
		...config.resolve.alias,
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	}
	return config;
}
