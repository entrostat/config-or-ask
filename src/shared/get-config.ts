import * as fs from 'fs-extra';

export async function getConfig(configPath: string) {
    try {
        return await fs.readJSON(configPath);
    } catch (e) {
        return {};
    }
}
