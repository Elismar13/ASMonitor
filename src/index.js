const AppData = require('./ApplicationData');
const App = require('./Application');

const Application = new App("ASMonitor beta 0.2");
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
const randomColor = require('../src/utils/randomColor')

async function retriveInitialData() {
    const data = await ApplicationData.getOverViewData();
    
    HelloBox.setContent(`Olá, {bold}${data.username}{/bold}!\nSeja bem-vindo ao ASMonitor\n`);

    OverviewBox.setContent(
        "{bold}Specs:{/bold}" +
        "{bold}Placa-mãe{/bold}: " + data.motherboard +
        "\n{bold}Processador:{/bold} " + data.cpu +
        "\n{bold}Memória total:{/bold} " + byteToMegabyte(data.memory.total) + ' MB'+
        "\n{bold}Gráficos:{/bold} " + data.graphics.controllers[0].model +
        "\n{bold}Armazenamento:{/bold} " + data.storage.map((storage) => `${storage.name} ${byteToMegabyte(storage.size)}MB, `) +
        "\n{bold}SO:{/bold} " + `${data.os.platform} ${data.os.distro} ${data.os.arch}` +
        "\n{bold}Internet:{/bold} " + data.networks.map((network) => network.ifaceName !== null ? `${network.ifaceName} ` : ''));
    
    Application.renderScreen();
}



setInterval(async function retriveDynamicData() {
    let CPUNUMBER = -1;
    const dynamicData = await ApplicationData.getDynamicData();
    const { cpus } = dynamicData.cpu;
    const memory = dynamicData.memory;
    const processes = dynamicData.process;
    const time = dynamicData.time;

    if(cpuGraphData.length < 1) {
        cpuGraphData = cpus.map(() => {
            CPUNUMBER++;
            return {
                title: 'CPU'+CPUNUMBER.toString(),
                x: Array.from({length: 15}, (v, k) => 15-k).map((value) => value.toString()),
                y: [],
                style: {
                    line: randomColor()
                }
            }
        }, CPUNUMBER)
    } else {
        for(let i = 0; i < cpuGraphData.length; i++ ) {
            if(cpuGraphData[i].y.length > 15) cpuGraphData[i].y.shift();
            cpuGraphData[i].y.push(cpus[i].load);
            // console.log(cpus[i].load)
        }
    }

    if(memoryGraphData.y.length > 15) memoryGraphData.y.shift();
    memoryGraphData.y.push((memory.usedmem / memory.totalmem) * 100);

    HelloBox.setLine(4, `${time}`)
    CPUGraph.setData(cpuGraphData)
    MemoryGraph.setData([memoryGraphData]);
    ProcessesBox.setData(
        [
            {
                percent: percentage(processes.running, processes.all),
                label: 'Execução',
                color:'yellow',
            }, 
            {
                percent: percentage(processes.sleeping, processes.all),
                label: 'Dormindo',
                color:'green',
            }, 
            {
                percent: percentage(processes.blocked, processes.all),
                label: 'Bloqueados',
                color:'cyan',
            },
        ]
    );
    Application.renderScreen()

}, 1000);

let memoryGraphData = {
    title: 'Memória',
    x: Array.from({length: 15}, (v, k) => 15-k).map((value) => value.toString()),
    y: []
};

let cpuGraphData = [];

Application.appendToScreen(MemoryGraph); //must append before setting data
Application.appendToScreen(CPUGraph);
Application.appendToScreen(ProcessesBox);

MemoryGraph.setData([memoryGraphData]);
Application.renderScreen()


OverviewBox.setContent("{center}Carregando...{/center}")

retriveInitialData();

Application.appendToScreen(HelloBox);
Application.appendToScreen(OverviewBox);

Application.renderScreen();