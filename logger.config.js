let chalk;

// Custom log message when compilation completes
class LogAfterCompilationPlugin {
	constructor(appPort) {
		this.appPort = appPort;
	}
	apply(compiler) {
		compiler.hooks.done.tapPromise("LogAfterCompilationPlugin", async (stats) => {
			if (!chalk) {
				chalk = await import("chalk");
			}

			const timestamp = new Date().toLocaleTimeString();
			const successMsg = chalk.default.bold.green;
			const errorMsg = chalk.default.bold.red;
			const warningMsg = chalk.default.bold.yellow;

			if (stats.hasErrors()) {
				console.log(errorMsg(`❌ [${timestamp}] Compilation failed due to an error. ❌\n`));
				return;
			}

			if (stats.hasWarnings()) {
				console.log(warningMsg(`⚠️  [${timestamp}] Compiled with warnings. ⚠️`));
				return;
			}

			console.log(successMsg(`\n⚡️ [${timestamp}] Compiled and running on port ${this.appPort} ⚡️\n`));
		});
	}
}

module.exports = LogAfterCompilationPlugin;
