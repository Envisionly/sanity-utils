import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
	globals: true,
	environment: "node",
	include: ["test/**/*.test.ts"],
	testTimeout: 5000, // 5 seconds
	coverage: {
	  provider: "v8",
	  reporter: ["text", "html", "lcov"],
	  all: true,
	  include: ["src/**/*.ts"],
	  exclude: ["src/index.ts", "src/types.ts"],
	  clean: true,
	  thresholds: {
		lines: 90,
		functions: 90,
		branches: 90,
		statements: 90,
	  },
	},
  },
});
