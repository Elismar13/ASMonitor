const blessed = require('blessed');
const contrib = require('blessed-contrib');

const CPUGraph = contrib.line({
    style: {
        line: 'yellow',
        text: 'green',
        baseline: 'black',
    },
    width: '60%',
    height: '50%',
    left: '40%',
    top:'top',
    xLabelPadding: 1,
    xPadding: 1,
    showLegend: true,
    wholeNumbersOnly: false,
    label: "   CPU Utilization (%)",
});

module.exports = CPUGraph;