const path = require("path");
const { execSync } = require("child_process");
const fs = require("fs");
const appConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '/appconfig.json'), 'utf-8'));
const mfeFilePath = path.join(__dirname, '../rds_pages/', 'mfe-config.ts');
const mfeFilePathTemp = path.join(__dirname, '../rds_pages/', 'mfe-configtemp.ts');
const portFilePath = path.join(__dirname, '../rds_pages/', 'port-config.ts');


if (process.argv.length > 3) {
  console.log('Invalid command');
  process.exit(0);
}

if (appConfig.replaceUrl == "true") {

  console.log('Changing URLs in .env file...');
  fs.copyFileSync(mfeFilePath, mfeFilePathTemp);
  let mfeConfig = fs.readFileSync(mfeFilePath).toString();
  let mfeConfigJSON = mfeConfig.substring(mfeConfig.indexOf("{"), mfeConfig.lastIndexOf("}") + 1);

  mfeConfigJSON = mfeConfigJSON.replace(/\'/g, "\"");
  mfeConfigJSON = mfeConfigJSON.replace(/([a-zA-Z]*): {/g, "\"$1\": {");
  mfeConfigJSON = mfeConfigJSON.replace(/url:/g, "\"url\":");
  mfeConfigJSON = mfeConfigJSON.replace(/\",/g, "\"");
  mfeConfigJSON = JSON.parse(mfeConfigJSON);
  // console.log("file path mayank2",mfeConfigJSON)

  let portConfig = fs.readFileSync(portFilePath).toString();
  let portConfigJSON = portConfig.substring(portConfig.indexOf("{"), portConfig.lastIndexOf("}") +1);
  portConfigJSON = portConfigJSON.replace(/\'/g, "\"");
  portConfigJSON = portConfigJSON.replace(/([a-zA-Z]*): {/g, "\"$1\": {");
  portConfigJSON = portConfigJSON.replace(/url:/g, "\"port\":");
  portConfigJSON = portConfigJSON.replace(/\",/g, "\"");
  portConfigJSON = JSON.parse(portConfigJSON);
  // console.log("port file path :",portConfigJSON)

  for (const mfeConf of Object.keys(mfeConfigJSON)) {
    // console.log(mfeConf);
    let pathConf = '';
    let url = mfeConfigJSON[mfeConf].url;
    let portIndex = url.indexOf("localhost:");
    let portConfig = url.substring(portIndex + 10, portIndex + 14);

    for (const portConf of Object.keys(portConfigJSON)) {
      let port = portConfigJSON[portConf].port;
      if (portConfig == port) {
        pathConf = portConf
          if (portConf == "host") {
            url = url.replace(/((http|https):\/\/localhost:)\d{4}/g, appConfig.appBaseUrl);
          } else {
              url = url.replace(/((http|https):\/\/localhost:)\d{4}/g, appConfig.appBaseUrl + "/" + pathConf);
          }
          mfeConfigJSON[mfeConf].url = url;
          break;
      }
    }

      console.log("Updated mfeConfig : ",mfeConfigJSON)
  }

  mfeConfig = mfeConfig.substring(0, mfeConfig.indexOf("{")) + JSON.stringify(mfeConfigJSON, null, 2);

  fs.writeFileSync(mfeFilePath, mfeConfig);
  console.log("Final :",mfeConfig);
}


execSync(`concurrently \"cd rds_pages\\Host && npm run build\"`, { cwd: process.cwd(), stdio: 'inherit' });


console.log('Deleting temporary files...');
if (appConfig.replaceUrl == "true") {
    fs.copyFileSync(mfeFilePathTemp, mfeFilePath);
    if (fs.existsSync(mfeFilePathTemp)) {
        fs.unlinkSync(mfeFilePathTemp)
    }
}

console.log('Done...');
