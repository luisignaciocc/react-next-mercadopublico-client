module.exports = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	moduleDirectories: ["node_modules", "src"],
	rootDir: "./",
	moduleNameMapper: {
		"\\.(scss|sass|css)$": "identity-obj-proxy",
		"src/(.*)": "<rootDir>/src/$1",
	},
}
