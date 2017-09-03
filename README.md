# remark-bobril

Plugin to compile Markdown to Bobril using Remark.

## Prerequisites
* npm install [remark](https://github.com/wooorm/remark/tree/master/packages/remark)

For more information, please check: [unified](https://github.com/unifiedjs/unified) 

## Installation
* npm install remark-bobril

## Programmatic usage in browser
```typescript
 import * as remark from 'remark';
 import * as remarkBobril 'remark-bobril';

 const markdown = '## Hello world';
 
 remark()
    .use(remarkBobril)
    .process(markdown, (_err, bobrilDom) => {
            const result = JSON.stringify(bobrilDom.contents);
            
            console.log(result);
          }
        );
```

The generated content of variable `result` is:
```javascript
{
  tag: 'div',
  children: [
    {
      tag: 'h2',
      children: [
        'Hello world'
      ]
    }
  ]
}
```

As you can see, there is on more wrapper `div` element in the `result` than you can expect. This `root` element is always generated.



 