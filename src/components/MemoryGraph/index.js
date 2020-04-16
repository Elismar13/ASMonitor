const contrib = require('blessed-contrib');

const MemoryGraph = contrib.line({
    style: {
        line: 'purple',
        text: 'green',
        baseline: 'black',
    },
    width: '60%',
    height: '50%',
    left: '40%',
    xLabelPadding: 1,
    xPadding: 1,
    showLegend: true,
    wholeNumbersOnly: false,
    label: "   Memory Utilization (MB)",
})

module.exports = MemoryGraph;