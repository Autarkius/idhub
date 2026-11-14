// كل المواقع بقت صفحات جوه الـ hub نفسه (/faten و /almousa و /ashwaq).
// فبقى كفاية نشغّل تطبيق واحد بس.
import { spawn } from "node:child_process";

const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const child = spawn(npm, ["run", "dev", "-w", "hub"], { stdio: "inherit", shell: true });

child.on("exit", (code) => process.exit(code ?? 0));
