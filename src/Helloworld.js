


const blessed = require('blessed');



const screen = blessed.screen({
  smartCSR: true
});

const OverviewBox = require('./components/OverviewBox');
const HelloBox = require('./components/HelloBox');


const OverView = getOverViewData();

screen.title = "ASMMonitor";

OverviewBox.setContent()

// Append our box to the screen.
screen.append(OverviewBox);
screen.append(HelloBox)

// If our box is clicked, change the content.
OverviewBox.on('click', function(data) {
  OverviewBox.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
  screen.render();
});

// If box is focused, handle `enter`/`return` and give us some more content.
OverviewBox.key('enter', function(ch, key) {
  OverviewBox.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
  OverviewBox.setLine(1, 'bar');
  OverviewBox.insertLine(1, 'foo');
  screen.render();
});

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
OverviewBox.focus();

// Render the screen.
screen.render();