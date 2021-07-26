module.exports = {
  configureWebpack: (config) => {
    config.devtool = "eval-source-map";
  },
  /*css: {
		loaderOptions: {
		  sass: {
			data: `@import "@/styles/_variables.scss";`
		  }
		}
	  }*/
};

/*
configureWebpack: {
    devtool: 'eval-source-map',
  },*/

/*
  // https://cli.vuejs.org/config/#vue-config-js
module.exports = {
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === "development") {
			// development environment configuration
			// https://webpack.js.org/configuration/devtool/#devtool
			// this is the most advanced for the development env
			config.devtool = "eval-source-map";
		}
	},
}*/
