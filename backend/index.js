const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pushRepo } = require("./controllers/push");
const { pullRepo } = require("./controllers/pull");
const { revertRepo } = require("./controllers/revert");

yargs(hideBin(process.argv))
  .command("init", "Initialize a new repository", {}, initRepo)
  .command("add <file>", "Add a files to repository",
    (yargs) => {
        yargs.positional("file" , {
            describe : "Files to add in the staging area",
            type: "string",
        })
    }, 
    addRepo)
  .command("commit <message>", "commit files to repository",
    (yargs)=>{
        yargs.positional("message" , {
            describe : "commit the staged files",
            type : "string",
        })
    },
    commitRepo)
  .command("push", "push files to S3", {}, pushRepo)
  .command("pull", "pull files from S3", {}, pullRepo)
  .command("revert <commitID>", "revert commit request",
    (yargs)=>{
        yargs.positional("commitID", {
            describe : "commit id to revert to",
            type : "string"
        })
    } ,
    revertRepo)
  .demandCommand(1, "You need to run at least one command")
  .help().argv;
