const blessed = require('blessed');
const contrib = require('blessed-contrib');

const MemoryGraph = contrib.line({
    style: {
        line: 'yellow',
        text: 'green',
        baseline: 'black',
    },
    border: {
        type: 'line'
    },
    width: '60%',
    height: '50%',
    left: '40%',
    top:'top',
    xLabelPadding: 1,
    xPadding: 1,
    maxY: 100,
    numYLabels: 5,
    showLegend: false,
    wholeNumbersOnly: false,
    label: " Consumo de memória (em %) ",
});
module.exports = MemoryGraph;