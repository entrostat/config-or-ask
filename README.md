oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g config-or-ask
$ config-or-ask COMMAND
running command...
$ config-or-ask (--version)
config-or-ask/0.0.0 linux-x64 node-v16.15.0
$ config-or-ask --help [COMMAND]
USAGE
  $ config-or-ask COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`config-or-ask hello PERSON`](#config-or-ask-hello-person)
* [`config-or-ask hello world`](#config-or-ask-hello-world)
* [`config-or-ask help [COMMAND]`](#config-or-ask-help-command)
* [`config-or-ask plugins`](#config-or-ask-plugins)
* [`config-or-ask plugins:install PLUGIN...`](#config-or-ask-pluginsinstall-plugin)
* [`config-or-ask plugins:inspect PLUGIN...`](#config-or-ask-pluginsinspect-plugin)
* [`config-or-ask plugins:install PLUGIN...`](#config-or-ask-pluginsinstall-plugin-1)
* [`config-or-ask plugins:link PLUGIN`](#config-or-ask-pluginslink-plugin)
* [`config-or-ask plugins:uninstall PLUGIN...`](#config-or-ask-pluginsuninstall-plugin)
* [`config-or-ask plugins:uninstall PLUGIN...`](#config-or-ask-pluginsuninstall-plugin-1)
* [`config-or-ask plugins:uninstall PLUGIN...`](#config-or-ask-pluginsuninstall-plugin-2)
* [`config-or-ask plugins update`](#config-or-ask-plugins-update)

## `config-or-ask hello PERSON`

Say hello

```
USAGE
  $ config-or-ask hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/entrostat/config-or-ask/blob/v0.0.0/dist/commands/hello/index.ts)_

## `config-or-ask hello world`

Say hello world

```
USAGE
  $ config-or-ask hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ config-or-ask hello world
  hello world! (./src/commands/hello/world.ts)
```

## `config-or-ask help [COMMAND]`

Display help for config-or-ask.

```
USAGE
  $ config-or-ask help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for config-or-ask.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.20/src/commands/help.ts)_

## `config-or-ask plugins`

List installed plugins.

```
USAGE
  $ config-or-ask plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ config-or-ask plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.9/src/commands/plugins/index.ts)_

## `config-or-ask plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ config-or-ask plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ config-or-ask plugins add

EXAMPLES
  $ config-or-ask plugins:install myplugin 

  $ config-or-ask plugins:install https://github.com/someuser/someplugin

  $ config-or-ask plugins:install someuser/someplugin
```

## `config-or-ask plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ config-or-ask plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ config-or-ask plugins:inspect myplugin
```

## `config-or-ask plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ config-or-ask plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ config-or-ask plugins add

EXAMPLES
  $ config-or-ask plugins:install myplugin 

  $ config-or-ask plugins:install https://github.com/someuser/someplugin

  $ config-or-ask plugins:install someuser/someplugin
```

## `config-or-ask plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ config-or-ask plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ config-or-ask plugins:link myplugin
```

## `config-or-ask plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ config-or-ask plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ config-or-ask plugins unlink
  $ config-or-ask plugins remove
```

## `config-or-ask plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ config-or-ask plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ config-or-ask plugins unlink
  $ config-or-ask plugins remove
```

## `config-or-ask plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ config-or-ask plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ config-or-ask plugins unlink
  $ config-or-ask plugins remove
```

## `config-or-ask plugins update`

Update installed plugins.

```
USAGE
  $ config-or-ask plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
