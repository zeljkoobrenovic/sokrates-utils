var fs = require('fs');

const indexPage = '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '    <meta charset="utf-8">\n' +
    '\t<meta http-equiv="refresh" content="0; URL=\'_sokrates_landscape/index.html" />\n' +
    '</head>\n' +
    '\n' +
    '<body>\n' +
    '</body>\n' +
    '</html>\n';

const root = '../landscapes/';

const createIndexPage = function (path) {
    fs.writeFile(root + path + '/index.html', indexPage, (err) => {
        console.log(path)
    });
}

createIndexPage('...');





