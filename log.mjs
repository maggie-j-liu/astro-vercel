import fs from "fs";
const config = fs.readFileSync(".vercel/output/config.json", "utf-8");
console.log(config);
