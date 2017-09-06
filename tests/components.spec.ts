import * as remark from 'remark';
import remarkBobril from '../src/index';

describe('convert markdown to bobril', () => {
  describe('heading', () => {
    it('h1', (done) => {
      const markdown = '# CSS Injection';

      remark()
        .use(remarkBobril)
        .process(markdown, (_err, bobrilDom) => {
          console.log(bobrilDom)
          const result = processResult(bobrilDom);

            expect(result.tag).toEqual('h1');
            expect(result.children[0]).toEqual('CSS Injection');
            done();
          }
        );
    })
  });
});

function processResult(node) {
  const resultWithRoot = node.contents;
  return resultWithRoot.children[0];
}
