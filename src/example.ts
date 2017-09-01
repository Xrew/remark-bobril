import * as fs from 'fs';
import * as remark from 'remark';
import * as report from 'vfile-reporter';
import * as remarkBobril from './index';

const example = fs.readFileSync(`${__dirname}/example.md`);

remark()
    .use(remarkBobril)
    .process(example, function (err, bobrilDom) {
        console.error(report(err || bobrilDom));

        let stringifiedBobrilDom = JSON.stringify(bobrilDom.contents);

        let typeScriptTemplate = `export function create() { return  ${stringifiedBobrilDom} };`;

        fs.writeFileSync(`${__dirname}/exampleOutput.ts`, typeScriptTemplate, 'utf-8');
    });
