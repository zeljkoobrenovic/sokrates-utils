const fs = require('fs');
const path = require('path');
const walk = require('walk');

function shouldDelete(fullPath) {
    if (fullPath.includes('/.git/')) return true;
    if (fullPath.includes('/src/main/')) return true;
    if (fullPath.includes('/src/test/')) return true;
    if (fullPath.includes('/src/generated/')) return true;
    if (fullPath.includes('/src/buildAndDeploy/')) return true;
    if (fullPath.includes('/src/other/')) return true;
    if (fullPath.includes('/_sokrates_landscape/index.html')) return true;
    if (fullPath.includes('/_sokrates_landscape/info.json')) return true;
    if (fullPath.includes('/html/index.html')) return true;
    if (fullPath.includes('/_sokrates_landscape/projects')) return true;
    if (fullPath.includes('/_sokrates_landscape/repositories')) return true;
    if (fullPath.includes('/_sokrates_landscape/contributors')) return true;
    if (fullPath.includes('/_sokrates_landscape/product')) return true;
    if (fullPath.includes('/_sokrates_landscape/data/')) return true;
    if (fullPath.includes('/_sokrates_landscape/visuals/')) return true;

    if (fullPath.includes('/_sokrates_landscape')) return false;
    if (fullPath.endsWith('publish.sh')) return false;
    if (fullPath.endsWith('.jekyll')) return false;
    if (fullPath.endsWith('cleanup-files.sh')) return false;
    if (fullPath.endsWith('index.html')) return false;

    return true;
}

const run = function (dir) {
    walk.walk(dir).on('file', function (root, fileStats, next) {
        const name = fileStats.name;
        const fullPath = path.join(root, name);

        if (shouldDelete(fullPath)) {
            console.log(fullPath);
            fs.unlink(fullPath, (err) => {
                if (err) console.log(err);
            });
        }

        next();
    });

}

run('../landscapes');
