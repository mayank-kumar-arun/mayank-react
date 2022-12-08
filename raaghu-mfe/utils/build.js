const path = require("path");
const { execSync } = require("child_process");
const fs = require("fs");
const appConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '/appconfig.json'), 'utf-8'));
const envFilePath = path.join(__dirname, '../rds_pages/host', '.env');
const envFilePathTemp = path.join(__dirname, '../rds_pages/host', '.env1');


if (process.argv.length > 3) {
  console.log('Invalid command');
  process.exit(0);
}

if (appConfig.replaceUrl == "true") {

  console.log('Changing URLs in .env file...');
  fs.copyFileSync(envFilePath, envFilePathTemp);
  let mfeConfig = fs.readFileSync(envFilePath).toString();
  // console.log(mfeConfig)
  let mfeConfigJSON = "{" + mfeConfig + "}";
  mfeConfigJSON = JSON.parse(mfeConfigJSON);
  console.log("file path mayank2",mfeConfigJSON)

  for (const mfeConf of Object.keys(mfeConfigJSON)) {
    console.log(mfeConf);
    let pathConf = '';
    // let url = mfeConfigJSON[mfeConf].url;
    // let portIndex = url.indexOf("localhost:");
    // let portConfig = url.substring(portIndex + 10, portIndex + 14);
  }

}