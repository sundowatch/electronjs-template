const {BrowserWindow} = require('electron').remote;
//var window = BrowserWindow.getFocusedWindow();

var $ = require('jquery');

$('#closeButton').on('click', function(){
    var window = BrowserWindow.getFocusedWindow();
    window.close();
});

$('#minimizeButton').on('click', function(){
    var window = BrowserWindow.getFocusedWindow();
    window.minimize();
});

$('#maximizeButton').on('click', function(){
    var window = BrowserWindow.getFocusedWindow();
    if(window.isMaximized()){
        window.unmaximize();
    }else{
        window.maximize();
    }
});

$('#devToolsButton').on('click', function(){
    var window = BrowserWindow.getFocusedWindow();
    window.webContents.openDevTools();
});

$('#sidebarButton').on('click', function(){
    $('.sidebar-row').toggleClass('open');
});

