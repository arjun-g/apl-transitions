const path = require('path');
const fs = require('fs');

var fileList = function (dir, filelist) {
    var files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file) {
        if (fs.statSync(dir + file).isDirectory()) {
            filelist = fileList(dir + file + '/', filelist);
        }
        else {
            filelist.push(dir + file);
        }
    });
    return filelist;
};

let files = fileList(path.join(__dirname, '..', '/', 'src') + '/');

let layout = {
    type: "APL",
    version: "1.1.0",
    commands: {}
};

files.forEach(file => {
    let json = fs.readFileSync(file).toString();
    let fileName = path.basename(file).replace('.json', '');
    layout.commands[fileName] = JSON.parse(json);
});



fs.writeFileSync(path.join(__dirname, '..', 'dist', 'apl-transitions.json'), JSON.stringify(layout, null, 4));