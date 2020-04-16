const AppData = require('./ApplicationData');
const App = require('./Application');

const Application = new App("ESMonitor beta 0.1 - Elismar");
const ApplicationData = new AppData();

//Boxes
const OverviewBox = require('./components/OverviewBox');
const HelloBox = require('./components/HelloBox');
const CPUGraph = require('./components/CPUGraph');

//Utils
const byteToMegabyte = require('./utils/convertBytesToMega');

async function retriveInitialData() {
    const data = await ApplicationData.getOverViewData();
    
    OverviewBox.setContent(
        "Placa-mãe: " + data.motherboard +
        "\nMemória total: " + byteToMegabyte(data.memory.total) + ' MB'+
        "\nGráficos: " + data.graphics.controllers[0].model +
        "\nArmazenamento: " + data.storage[0].type + ' ' + data.storage[0].name +
        "\nSO: " + data.os.platform + ' ' + data.os.distro + " " + data.os.arch +
        "\nInternet: " + data.networks[0].iface);
    
    Application.renderScreen();
}

var series1 = {
    title: 'CPU1',
    x: ['t1', 't2', 't3', 't4'],
    y: [5, 1, 7, 5]
 }
var series2 = {
    title: 'CPU2',
    x: ['t1', 't3', 't4'],
    y: [2, 4, 10]
}

Application.appendToScreen(CPUGraph) //must append before setting data
CPUGraph.setData([series1, series2])

HelloBox.setContent(`Olá, Elismar!\nSeja bem-vindo ao ASMonitor\n\n17:38:56 PM : GMT -03:00`);
OverviewBox.setContent("{center}Carregando...{/center}")

retriveInitialData();

Application.appendToScreen(HelloBox);
Application.appendToScreen(OverviewBox);

Application.renderScreen();