const AppData = require('./ApplicationData');
const App = require('./Application');

const Application = new App("ESMonitor beta 0.1 - Elismar");
const ApplicationData = new AppData();

//Boxes
const OverviewBox = require('./components/OverviewBox');
const HelloBox = require('./components/HelloBox');

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


//Dados
HelloBox.setContent(`Olá, Elismar!\nSeja bem-vindo ao ASMonitor\n\n17:38:56 PM : GMT -03:00`);

retriveInitialData();

Application.appendToScreen(HelloBox);
Application.appendToScreen(OverviewBox);

Application.renderScreen();