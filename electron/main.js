const {app,BrowserWindow}=require('electron');
const path=require('path');
app.whenReady().then(()=>{
 const win=new BrowserWindow({width:1600,height:950,backgroundColor:'#0B0F19'});
 win.loadFile(path.join(__dirname,'../src/index.html'));
});