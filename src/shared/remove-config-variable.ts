import { getConfig } from './get-config';
import * as fs from 'fs-extra';
import * as path from 'node:path';
export async function removeConfigVariable(
    configPath: string,
    variable: string,
) {
    const config = await getConfig(configPath);
    delete config[variable];
    await fs.mkdirp(path.dirname(configPath));
    await fs.writeJSON(configPath, config);
}
