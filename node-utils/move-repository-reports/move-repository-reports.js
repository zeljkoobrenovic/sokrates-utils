const fs = require('fs');
const {readdirSync} = require('fs');
const fse = require('fs-extra');

const root = '../landscapes/';

const getDirectories = source => readdirSync(source, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const moveAllSubFolders = function (srcDir, destDir, regex) {
    console.log(root + srcDir + ' => ' + root + destDir);
    getDirectories(root + srcDir)
        .filter(dir => dir.match(new RegExp(regex, 'g')))
        .forEach(dir => {
            let sourceMove = root + srcDir + '/' + dir;
            console.log(sourceMove);
            let destMove = root + destDir + '/' + dir;
            fse.moveSync(sourceMove, destMove, {overwrite: true}, function (err) {
                if (err) {
                    console.error(err);
                } else {
                    console.log(srcRoot + srcDir + '\n  =/' + regex + '/g=> ' + destRoot + destDir);
                }
            });
        });
}

const config = JSON.parse(fs.readFileSync('move-config.json'));

config.groups.forEach(group => {
    group.rules.forEach(mapping => moveAllSubFolders(mapping.src, mapping.target, mapping.regex));
});

