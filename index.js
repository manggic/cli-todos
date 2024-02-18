#! /usr/bin/env node

import {program } from 'commander'
import list from './commands/list.js'
import add from './commands/add.js'
import markDone from './commands/markDone.js'

program
    .command('list')
    .description('this will list all todos')
    .action(list)

program
    .command('add <task>')
    .description('add the task in todo')
    .action(add)

program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone)

program.parse()

// console.log(program);