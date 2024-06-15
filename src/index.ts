#!/usr/bin/env node
import { helpers, termost } from "termost";

type ProgramContext = {
	globalFlag: string;
};

type DebugCommandContext = {
	localFlag: string;
};

const program = termost<ProgramContext>("CLI example", {
	onException(error) {
		console.error(`Error logic ${error.message}`);
	},
	onShutdown() {
		console.log("Clean-up logic");
	},
});

program
	.command({
		name: "deploy",
		description:
			"A custom command example runnable via `so build` (command help available via `so build --help`)",
	})
	.task({
		label: "A label can be displayed to follow the task progress",
		async handler() {
            console.log("Deploying ⭐!")
		},
	});