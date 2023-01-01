import { Command, Flags, CliUx } from '@oclif/core';
import * as path from 'node:path';
import { getConfig } from '../shared/get-config';
import { setConfigValue } from '../shared/set-config-value';

export default class Get extends Command {
    static description = `Gets the variable you are looking for from the config file or environment. If it cannot find a value, it asks you for it. You're able to disable the environment or config files if you don't want it to use those.

    If the config does not exist, it will create it for you.

    The order of importance is:

    1. Config file
    2. Environment variable
    3. User input`;

    static examples = [
        '<%= config.bin %> <%= command.id %> MY_VARIABLE_NAME',
        '<%= config.bin %> <%= command.id %> MY_VARIABLE_NAME --skip-env',
        '<%= config.bin %> <%= command.id %> MY_VARIABLE_NAME --skip-config',
        '<%= config.bin %> <%= command.id %> MY_VARIABLE_NAME --config=./path/to/config.json',
        'MY_VARIABLE_NAME=$(<%= config.bin %> <%= command.id %> MY_VARIABLE_NAME)',
    ];

    static flags = {
        'skip-env': Flags.boolean({
            char: 'e',
            description: "Don't look at environment variables for the value",
            default: false,
        }),
        'skip-config': Flags.boolean({
            char: 'c',
            description: "Don't look at config file for the value",
            default: false,
        }),
        config: Flags.string({
            char: 'p',
            description:
                'Path to config file (not required, we use one from your local home directory if you do not specify one)',
            required: false,
        }),
    };

    static args = [
        {
            name: 'variable',
            required: true,
            description: 'The name of the variable you would like to get',
        },
    ];

    public async run(): Promise<void> {
        const { args, flags } = await this.parse(Get);
        const variable = args.variable;

        const configPath =
            flags.config || path.join(this.config.configDir, 'config.json');
        // 1. Config file
        if (!flags['skip-config']) {
            const config = await getConfig(configPath);
            if (config[variable]) {
                this.log(config[variable]);
                return this.exit(0);
            }
        }

        // 2. Environment variable
        if (!flags['skip-env']) {
            if (process.env[variable]) {
                this.log(process.env[variable]);
                return this.exit(0);
            }
        }

        // 3. User input
        const value = await CliUx.ux.prompt(`Enter the value for ${variable}`);
        if (!flags['skip-config']) {
            await setConfigValue(configPath, variable, value);
        }
        this.log(value);
        return this.exit(0);
    }
}
