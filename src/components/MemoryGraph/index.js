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
    height: '35%',
    left: '40%',
    top:'45%',
    xLabelPadding: 1,
    xPadding: 1,
    maxY: 100,
    showNthLabel: true,
    showLegend: false,
    wholeNumbersOnly: true,
    label: " Consumo de memória (em %) ",
});
module.exports = MemoryGraph;