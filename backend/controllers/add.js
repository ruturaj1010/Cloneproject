const fs = require("fs").promises;
const path = require("path");

const addRepo = async (filepath) => {
    const repoPath = path.resolve(process.cwd(), ".MyGit");
    const stagePath = path.join(repoPath , "staging");

    try {
        await fs.mkdir(stagePath , {recursive:true});
        const fileName = path.basename(filepath);
        await fs.copyFile(filepath , path.join(stagePath, fileName));
        console.log(`File ${fileName} added to the staging area`);
    } catch (error) {
        console.error("error in staging the files ", error);
    }
}

module.exports = {addRepo};