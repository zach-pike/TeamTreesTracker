import fetch from "node-fetch";
import ms from "ms";
import fs from "fs/promises";
setInterval(async () => {
    let logfile = await fs.readFile("logfile.txt", "utf8");
    let resp = await (await fetch("https://tscache.com/donation_total.json")).json();
    logfile += `${Date.now()},${resp.count}\n`;
    await fs.writeFile("logfile.txt", logfile);
}, ms("10s"));
