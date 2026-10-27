import { mkdirSync, mkdtempSync, rmSync } from "node:fs";
import os from "node:os";
import { join } from "node:path";

const root = mkdtempSync(join(os.tmpdir(), "automode-test-environment-"));
const home = join(root, "home");
const temporary = join(root, "tmp");
mkdirSync(home);
mkdirSync(temporary);
process.env.HOME = home;
process.env.USERPROFILE = home;
process.env.TMPDIR = temporary;
process.env.TMP = temporary;
process.env.TEMP = temporary;
delete process.env.PI_AUTOMODE_SETTINGS_JSON;
process.once("exit", () => rmSync(root, { recursive: true, force: true }));
