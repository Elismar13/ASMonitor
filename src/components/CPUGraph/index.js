const blessed = require('blessed');
const contrib = require('blessed-contrib');

const CPUGraph = contrib.line({
    style: {
        line: 'yellow',
        text: 'green',
        baseline: 'black',
    },
    border: {
        type: 'line'
    },
    width: '60%',
    height: '45%',
    left: '40%',
    top:'top',
    xLabelPadding: 1,
    xPadding: 1,
    showLegend: true,
    wholeNumbersOnly: false,
    label: "   Utilização do CPU (%)",
});

module.exports = CPUGraph;