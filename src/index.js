const AppData = require('./ApplicationData');
const App = require('./Application');

const Application = new App("ESMonitor beta 0.2 - Elismar");
const ApplicationData = new AppData();

//Boxes
const OverviewBox = require('./components/OverviewBox');
const HelloBox = require('./components/HelloBox');
const CPUGraph = require('./components/CPUGraph');
const MemoryGraph = require('./components/MemoryGraph');
const ProcessesBox = require('./components/ProcessesBox');

//Utils
const byteToMegabyte = require('./utils/convertBytesToMega');
const percentage = require('../src/utils/convertToPercentage')


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



setInterval(async function retriveDynamicData() {
    let CPUNUMBER = 0;
    const dynamicData = await ApplicationData.getDynamicData();
    const { cpus } = dynamicData.cpu;
    const memory = dynamicData.memory;
    const processes = dynamicData.process;

    if(memoryGraphData.y.length > 15) memoryGraphData.y.shift();

    memoryGraphData.y.push((memory.usedmem / memory.totalmem) * 100);

    //console.log(memoryGraphData
    MemoryGraph.setData([memoryGraphData]);
    ProcessesBox.setData([
                            {
                                percent: percentage(processes.running, processes.all),
                                label: 'Execução',
                                color:'yellow'
                            }, 
                            {
                                percent: percentage(processes.sleeping, processes.all),
                                label: 'Dormindo',
                                color:'green'
                            }, 
                            {
                                percent: percentage(processes.blocked, processes.all),
                                label: 'bloqueados',
                                color:'cyan'
                            }, 
                        ] 
                        );
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

let memoryGraphData = {
    title: 'Memory',
    x: Array.from({length: 15}, (v, k) => 15-k).map((value) => value.toString()),
    y: []
};

let cpuGraphData = [];

let data = [
    {
        title: 'CPU1',
        x: Array.from({length: 15}, (v, k) => 15-k).map((value) => value.toString()),
        y: [5, 1, 7, 5, 56, 89, 20, 1, 3, 54, 65, 87, 56, 45, 56]
    },
    {
        title: 'CPU2',
        x: Array.from({length: 15}, (v, k) => 15-k).map((value) => value.toString()),
        y: [78,98,96,96,54,21,32,54,1,2,3,57,89,54,2],
        style: {
            line: 'red'
        }
    },
]

Application.appendToScreen(MemoryGraph); //must append before setting data
Application.appendToScreen(CPUGraph);
Application.appendToScreen(ProcessesBox);
CPUGraph.setData(data)

MemoryGraph.setData([memoryGraphData]);
Application.renderScreen()


OverviewBox.setContent("{center}Carregando...{/center}")

retriveInitialData();

Application.appendToScreen(HelloBox);
Application.appendToScreen(OverviewBox);

Application.renderScreen();