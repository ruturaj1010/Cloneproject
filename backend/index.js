const yargs = require("yargs");

const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");

yargs(hideBin(process.argv))
    .command("init", "Initialize a new repository", {}, initRepo)
    .demandCommand(1, "You need to run at least one command")
    .help().argv;
