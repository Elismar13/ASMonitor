const blessed = require('blessed');

// Create a box perfectly centered horizontally and vertically.
const OverviewBox = blessed.box({
    top: '30%',
    left: 'left',
    width: '40%',
    height: '50%',
    align: 'left',
    valign: 'middle',
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