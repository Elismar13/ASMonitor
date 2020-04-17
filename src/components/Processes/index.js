const blessed = require('blessed');

const HelloBox = blessed.box({
    top:'top',
    left: 'left',
    width: '30%',
    height: '30%',
    align: 'center',
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

module.exports = HelloBox;