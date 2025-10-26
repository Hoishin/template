import { writeFile } from "node:fs/promises";

const main = async () => {
	await writeFile("hello.txt", "Hello, World!\n", "utf-8");
};

await main();
