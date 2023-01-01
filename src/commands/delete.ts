import { Command, Flags } from '@oclif/core';
import * as path from 'node:path';
import { removeConfigVariable } from '../shared/remove-config-variable';

export default class Delete extends Command {
    static description =
        'Adds the ability to delete a variable from the config';

    static examples = ['<%= config.bin %> <%= command.id %>'];

    static flags = {
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
        const { args, flags } = await this.parse(Delete);

        const configPath =
            flags.config || path.join(this.config.configDir, 'config.json');
        await removeConfigVariable(configPath, args.variable);

        this.log(`Deleted ${args.variable} from ${configPath}`);
    }
}
