const AppData = require('./ApplicationData');
const App = require('./Application');

const Application = new App("ESMonitor beta 0.1 - Elismar");
const ApplicationData = new AppData();

//Boxes
const OverviewBox = require('./components/OverviewBox');
const HelloBox = require('./components/HelloBox');
const CPUGraph = require('./components/CPUGraph');
const MemoryGraph = require('./components/MemoryGraph');

//Utils
const byteToMegabyte = require('./utils/convertBytesToMega');


async function retriveInitialData() {
    const data = await ApplicationData.getOverViewData();
    
    HelloBox.setContent(`Olá, {bold}${data.username}{/bold}!\nSeja bem-vindo ao ASMonitor\n\n17:38:56 PM : GMT -03:00`);

    OverviewBox.setContent(
        "{bold}Placa-mãe{/bold}: " + data.motherboard +
        "\n{bold}Processador:{/bold} " + data.cpu +
        "\n{bold}Memória total:{/bold} " + byteToMegabyte(data.memory.total) + ' MB'+
        "\n{bold}Gráficos:{/bold} " + data.graphics.controllers[0].model +
        "\n{bold}Armazenamento:{/bold} " + data.storage[0].type + ' ' + data.storage[0].name +
        "\n{bold}SO:{/bold} " + data.os.platform + ' ' + data.os.distro + " " + data.os.arch +
        "\n{bold}Internet:{/bold} " + "Adaptador eth0 GIGABYTE");
    
    Application.renderScreen();
}

let cpuGraphData = [];


setInterval(async function retriveDynamicData() {
    let CPUNUMBER = 0;
    const dynamicData = await ApplicationData.getDynamicData();
    const memory = dynamicData.memory;

    if(memoryGraphData.y.length > 15) memoryGraphData.y.shift();

    memoryGraphData.y.push((memory.usedmem / memory.totalmem) * 100);

    //console.log(memoryGraphData)
    MemoryGraph.setData([memoryGraphData]);
    Application.renderScreen()
    // const cpus = dynamicData.cpu.cpus.map((value) => { 
    //     CPUNUMBER++;
    //     return {
    //         title: "CPU".concat(CPUNUMBER),
    //     } 
    // }, CPUNUMBER);

    // data[0].x.push('T'+data[0].x.length);
    // data[0].y.push(Math.random()*100);

    // CPUGraph.setData(data)
    // Application.renderScreen()
    //console.log(data[0]);
}, 1000);

var memoryGraphData = {
    title: 'Memory',
    x: Array.from({length: 15}, (v, k) => 15-k).map((value) => value.toString()),
    y: []
};

var data = [
    {
        title: 'CPU1',
        x: ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8'],
        y: [5, 1, 7, 5, 56, 89, 20, 1, 3, 54, 65]
    },
]

Application.appendToScreen(MemoryGraph) //must append before setting data
Application.appendToScreen(CPUGraph)
CPUGraph.setData(data)

MemoryGraph.setData([memoryGraphData]);
Application.renderScreen()


OverviewBox.setContent("{center}Carregando...{/center}")

retriveInitialData();

Application.appendToScreen(HelloBox);
Application.appendToScreen(OverviewBox);

Application.renderScreen();