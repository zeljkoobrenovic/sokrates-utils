var fs = require('fs');

const root = '../landscapes/';

const rewrite = function (path, regex, replacement) {
    const filepath = root + path;
    const content = fs.readFileSync(filepath) + '';
    if (content) {
        const cleaned = content.replace(regex, replacement);
        if (cleaned !== content) {
            console.log("UPDATE: " + filepath);
            try {
                fs.writeFileSync(filepath, cleaned);
            } catch (e) {
                console.log(e);
            }
        }
    }
}

rewrite('...', /.../g, '/');
