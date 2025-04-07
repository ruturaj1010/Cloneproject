const fs = require("fs").promises;
const path = require("path");

const initRepo = async () => {
    const repoPath = path.resolve(process.cwd(), ".MyGit");
    const commitsPath = path.join(repoPath, "commits");

    try {
        await fs.mkdir(repoPath, { recursive: true });
        await fs.mkdir(commitsPath, { recursive : true });
        await fs.writeFile(
            path.join(repoPath ,  "config.json"),
            JSON.stringify({bucket : "S3 bucket"})
        )
        console.log("Repository initialized!")
    } catch (error) {
        console.error("Error whie initializing the repository");
    }
}

module.exports = { initRepo };