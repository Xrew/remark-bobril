import * as fs from 'fs';
import * as remark from 'remark';
import * as report from 'vfile-reporter';
import * as remarkBobril from './index';

const example = fs.readFileSync(`${__dirname}/example.md`);

remark()
  .use(remarkBobril)
  .process(example, (err, bobrilDom) => {
      console.error(report(err || bobrilDom));

      const stringifiedBobrilDom = JSON.stringify(bobrilDom.contents);

      const typeScriptTemplate = `export function create() { return  ${stringifiedBobrilDom} };`;

      fs.writeFileSync(`${__dirname}/exampleOutput.ts`, typeScriptTemplate, 'utf-8');
    }
  );
