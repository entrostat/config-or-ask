config-or-ask
=================

This is a CLI that helps you get values in your bash scripts. The way it works is that it looks to see if the variable name you're looking for is in a file or in the environment and if it is there then it returns that value. If the value is not there, then it asks the user for input and then stores that for future use.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Quick Installation](#quick-installation)
* [Full Installation](#full-installation)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->


# Quick Installation

```bash
npm install -g config-or-ask
```

# Full Installation

In order to provide this CLI to all users, we'll want to install it from the binaries provided. Download the `.tar.gz` file from the releases page.

Then run the following to install:
```bash
tar -xvf config-or-ask-<version>.tar.gz
sudo rm -rf /usr/local/src/config-or-ask
sudo rm -rf /usr/local/bin/config-or-ask
sudo mv config-or-ask /usr/local/src/config-or-ask
sudo ln -s /usr/local/src/config-or-ask/bin/config-or-ask /usr/local/bin/config-or-ask
```

# Usage

The idea for this CLI is that you use it in a bash script to retrieve values from a cache if you have it or from user input if you don't. Examples may include:

```bash
USERNAME=$(config-or-ask get MY_APP_USERNAME)
# This will check if the variable MY_APP_USERNAME exists 
# in the config or in the environment. If it is not there 
# it will ask the user to input a value for it. Let's say
# that the value wasn't there and the user enters "bob".
echo ${USERNAME} 
# Output: bob

# You can also have custom config locations. For example
# you may wan't project level configs. In that case, you
# can use the --config flag to specify a config file.
USERNAME=$(config-or-ask get MY_APP_USERNAME --config=./path/to/my/config.json)
# It will automatically create that folder path and
# config file if it doesn't exist.


# Finally, there may be times when you don't want to
# use the environment variables. In that case you
# can use the --skip-env flag.
USERNAME=$(config-or-ask get MY_APP_USERNAME --skip-env)

```

Here's how you use the CLI:

<!-- usage -->
```sh-session
$ npm install -g config-or-ask
$ config-or-ask COMMAND
running command...
$ config-or-ask (--version)
config-or-ask/1.1.0 linux-x64 node-v16.15.0
$ config-or-ask --help [COMMAND]
USAGE
  $ config-or-ask COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`config-or-ask delete VARIABLE`](#config-or-ask-delete-variable)
* [`config-or-ask get VARIABLE`](#config-or-ask-get-variable)
* [`config-or-ask help [COMMAND]`](#config-or-ask-help-command)

## `config-or-ask delete VARIABLE`

Adds the ability to delete a variable from the config

```
USAGE
  $ config-or-ask delete [VARIABLE] [-p <value>]

ARGUMENTS
  VARIABLE  The name of the variable you would like to get

FLAGS
  -p, --config=<value>  Path to config file (not required, we use one from your local home directory if you do not
                        specify one)

DESCRIPTION
  Adds the ability to delete a variable from the config

EXAMPLES
  $ config-or-ask delete
```

_See code: [dist/commands/delete.ts](https://github.com/entrostat/config-or-ask/blob/v1.1.0/dist/commands/delete.ts)_

## `config-or-ask get VARIABLE`

Gets the variable you are looking for from the config file or environment. If it cannot find a value, it asks you for it. You're able to disable the environment or config files if you don't want it to use those.

```
USAGE
  $ config-or-ask get [VARIABLE] [-e] [-c] [-p <value>]

ARGUMENTS
  VARIABLE  The name of the variable you would like to get

FLAGS
  -c, --skip-config     Don't look at config file for the value
  -e, --skip-env        Don't look at environment variables for the value
  -p, --config=<value>  Path to config file (not required, we use one from your local home directory if you do not
                        specify one)

DESCRIPTION
  Gets the variable you are looking for from the config file or environment. If it cannot find a value, it asks you for
  it. You're able to disable the environment or config files if you don't want it to use those.

  If the config does not exist, it will create it for you.

  The order of importance is:

  1. Config file
  2. Environment variable
  3. User input

EXAMPLES
  $ config-or-ask get MY_VARIABLE_NAME

  $ config-or-ask get MY_VARIABLE_NAME --skip-env

  $ config-or-ask get MY_VARIABLE_NAME --skip-config

  $ config-or-ask get MY_VARIABLE_NAME --config=./path/to/config.json

  MY_VARIABLE_NAME=$(config-or-ask get MY_VARIABLE_NAME)
```

_See code: [dist/commands/get.ts](https://github.com/entrostat/config-or-ask/blob/v1.1.0/dist/commands/get.ts)_

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
<!-- commandsstop -->
