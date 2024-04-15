#!/usr/bin/env node
const { Command } = require("commander");
const pkg = require("./package.json");
const api = require("./index");

const program = new Command();

program.name(pkg.name).description(pkg.description).version(pkg.version);

program
  .command("add")
  .description("add a task")
  .argument("<string>", "task name")
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    const taskName = str.split(options.separator, limit);
    api.add(taskName);
  });

program
  .command("clear")
  .description("clear all tasks")
  .action(() => {
    console.log("clear success.");
  });

program
  .command("list")
  .description("print all tasks")
  .action(() => {
    console.log("111");
  });

program.parse();
