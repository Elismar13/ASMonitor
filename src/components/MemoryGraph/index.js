const blessed = require('blessed');
const contrib = require('blessed-contrib');

const MemoryGraph = contrib.line({
    style: {
        line: 'blue',
        text: 'green',
        baseline: 'black',
    },
    border: {
        type: 'line'
    },
    width: '60%',
    height: '30%',
    left: '40%',
    top:'50%',
    xLabelPadding: 1,
    xPadding: 1,
    maxY: 100,
    showLegend: false,
    wholeNumbersOnly: false,
    label: " Consumo de memória (em %) ",
});
module.exports = MemoryGraph;