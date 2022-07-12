const fs = require('fs');

const getDirectories = source =>
    fs.readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

const run = function (dir) {
    const directories = getDirectories(dir);

    directories.forEach(subDir => {
        const landscapeDir = dir + '/' + subDir + '/_sokrates_landscape';
        if (fs.existsSync(landscapeDir)) {
            console.log(landscapeDir);
            fs.rmSync(landscapeDir, {recursive: true});
        }
    });
}

run('../../sokrates-analyses/analysis-artifacts/reports');
