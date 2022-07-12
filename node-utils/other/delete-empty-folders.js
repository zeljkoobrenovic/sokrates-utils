const fs = require('fs');
const walk = require('walk');

const run = function (dir) {
    walk.walk(dir).on('directory', function (root, fileStats, next) {
        const name = fileStats.name;
        const fullPath = require('path').join(root, name);

        const filesCount = fs.readdirSync(fullPath).length;
        if (filesCount === 0) {
            console.log(fullPath);
            fs.rmdirSync(fullPath);
        }

        next();
    });
}

run('../landscapes');
