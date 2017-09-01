var fs = require('fs');
var retext = require('retext');
var report = require('vfile-reporter');
var remarkBobril = require('./index.js');

var doc = fs.readFileSync('example.md');

retext()
    .use(remarkBobril)
    .process(doc, function (err, bobrilDom) {
        console.error(report(err || bobrilDom));

        let stringifiedBobrilDom  = JSON.stringify(bobrilDom);

        let typeScriptTemplate = `export const page = '${stringifiedBobrilDom}'`;

        fs.writeFileSync(`${__dirname}/exampleOutput.ts`, typeScriptTemplate, 'utf-8');
    });