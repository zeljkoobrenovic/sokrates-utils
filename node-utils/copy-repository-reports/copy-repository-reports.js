const fs = require('fs');
const fse = require('fs-extra');

const srcRoot = '../../sokrates-analyses/';
const destRoot = '../landscapes/';

const copyAllSubFoldersTo = function (srcDir, destDir) {
    console.log(srcDir + ' => ' + destDir);

    fse.copySync(srcRoot + srcDir, destRoot + destDir, {overwrite: true}, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log(srcRoot + srcDir + '\n => ' + destRoot + destDir);
        }
    });
}

const config = JSON.parse(fs.readFileSync('copy-config.json'));

config.groups.forEach(group => {
    group.rules.forEach(mapping => copyAllSubFoldersTo(mapping.src, mapping.target, mapping.regex));
});
