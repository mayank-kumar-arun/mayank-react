const path = require('path');
var directories = path.dirname('../rds_pages/host');
const { execSync } = require('child_process');
const fs = require('fs');
// const tsconfigPath = path.join(directories,  'package.json');

function getArgs() {
    const args = {data:"helo"};
    process.argv
        .slice(2, process.argv.length)
        .forEach(arg => {
            const longArg = arg.split('=');
            let longArgFlag = '';
            if (arg.slice(0, 2) === '--') {
                longArgFlag = longArg[0].slice(2, longArg[0].length);
            } else {
                longArgFlag = longArg[0];
            }
            const longArgValue = longArg.length > 1 ? longArg[1] : true;
            args[longArgFlag] = longArgValue;

        });
    return args;
}

async function start() {

    const args = getArgs();

    console.log('Argumenets: ' + args.data);

    const projects = JSON.parse(fs.readFileSync(path.join(directories,"..", 'package.json')).toString());
    console.log(projects)
    const projectToBuild = args.projects;

    if (projectToBuild) {
        let angular_projects = Object.keys(projects);
        let projectToBuildArray = projectToBuild.split(',');
        for (const project of projectToBuildArray) {
            let prj = angular_projects.indexOf(project);
            if (prj != -1 && project != 'storybook') {
                console.log('Building project ' + project + '...')
                execSync(`webpack --mode production build ${project}`, { cwd: process.cwd(), stdio: 'inherit' });
            }
        }
    }
    console.log('Done...');
}

start();