const contrib = require('blessed-contrib');

const ProcessBox = contrib.donut({
    top:'75%',
    left: 'left',
    width: '100%',
    height: '30%',
    border: {
      type: 'line'
    },
    style: {
      fg: 'white',
      bg: 'black',
      border: {
        fg: '#f0f0f0'
      },
    },
    
    label: ' Processos ',
    radius: 6,
    arcWidth: 3,
    remainColor: 'black',
    yPadding: 0,
});

module.exports = ProcessBox;