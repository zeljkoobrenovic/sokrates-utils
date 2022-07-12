const fs = require('fs');
const walk = require('walk');

const run = function (dir) {
    walk.walk(dir).on('file', function (root, fileStats, next) {
        const name = fileStats.name;
        const fullPath = require('path').join(root, name);

        if (fullPath.endsWith('_sokrates_landscape/config.json')) {
            console.log(fullPath);
            let content = fs.readFileSync(fullPath) + '';
            console.log(content.length);
            let data = JSON.parse(content);

            data.field = "<VALUE>";

            fs.writeFileSync(fullPath, JSON.stringify(data));
        }

        next();
    });

}

run('../landscapes/');

