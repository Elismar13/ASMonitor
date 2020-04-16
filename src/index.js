const AppData = require('./ApplicationData');
const App = require('./Application');

const Application = new App("ESMonitor beta 0.1 - Elismar");
const ApplicationData = new AppData();

//Boxes
const OverviewBox = require('./components/OverviewBox');
const HelloBox = require('./components/HelloBox');

let Data;

async function retriveInitialData() {
    const Data = await ApplicationData.getOverViewData();
    
    OverviewBox.setContent(
        "Placa-mãe: " + Data.motherboard +
        "\nMemória total: " + Math.round(Data.memory.total/1024/1024) + ' MB'+
        "\nGráficos: " + Data.graphics.controller +
        "\nArmazenamento: " + Data.storage +
        "\nSO: " + "" +
        "\nInternet: ");
    
    Application.renderScreen();
}


//Dados
HelloBox.setContent(`Olá, Elismar!\nSeja bem-vindo ao ASMonitor\n\n17:38:56 PM : GMT -03:00`);

retriveInitialData();

Application.appendToScreen(HelloBox);
Application.appendToScreen(OverviewBox);

Application.renderScreen();