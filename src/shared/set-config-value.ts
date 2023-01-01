import { getConfig } from './get-config';
import * as fs from 'fs-extra';
import * as path from 'node:path';
export async function setConfigValue(
    configPath: string,
    variable: string,
    value: any,
) {
    const config = await getConfig(configPath);
    config[variable] = value;
    await fs.mkdirp(path.dirname(configPath));
    await fs.writeJSON(configPath, config);
}
