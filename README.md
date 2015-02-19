# chartist-plugin-barhighlight
Highlitght Bar for Chartist.js

# Highlight Bars for Chartist.js 
This is a simple plugin for Chartist.js that will highlight bars on bar charts.
Values equal or over limit will be highlighted.

## Available options and their defaults values
```javascript
var defaultOptions = {
  limit: null,
  highlightBarClass: 'ct-bar-highlight'
};
```

## Sample usage in Chartist.js

```javascript
var chart = new Chartist.Bar('.ct-chart', {
  labels: [1, 2, 3, 4, 5, 6, 7],
  series: [
    [2, 4, 2, 5, 4, 3, 6]
  ]
}, {
  plugins: [
    Chartist.plugins.ctBarHighlight({
      limit: 6,
      highlightBarClass: 'ct-bar-highlight'
    })
  ]
});
```
