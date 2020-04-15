const blessed = require('blessed');

// Create a box perfectly centered horizontally and vertically.
const OverviewBox = (title, content) => blessed.box({
    top: 'top',
    left: 'left',
    width: '50%',
    height: '50%',
    content: `{center}${title}{/center}\n ${content}`,
    tags: true,
    border: {
      type: 'line'
    },
    style: {
      fg: 'white',
      bg: 'transparent',
      border: {
        fg: '#f0f0f0'
      },
      hover: {
        bg: 'green'
      }
    }
});

module.exports = OverviewBox;