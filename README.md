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
            
            console.log(result);
          }
        );
```

```javascript
{
  tag: 'div',
  children: [
    {
      tag: 'h1',
      children: [
        'Hello world'
      ]
    }
  ]
}
```




 