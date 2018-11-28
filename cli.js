const colors = require('colors/safe');
const createScene = require('./configs/cli/createScene');
const createObject = require('./configs/cli/createObj');
const createComponent = require('./configs/cli/createComponent');
const updateIndex = require('./configs/cli/updateIndex');

const args = [];
process.argv.forEach(val => {
  args.push(val);
});

if (args[2] === 'scene') {
  createScene(args[3]);
}

if (args[2] === 'obj' || args[2] === 'object') {
  createObject(args[3], args[4]);
}

if (args[2] === 'comp' || args[2] === 'component') {
  createComponent(args[3]);
}

function updateSceneIndex() {
  updateIndex('./src/scenes');
}
function updateUIPluginIndex() {
  updateIndex('./plugins/phaser-ui/');
}
function updateComponentIndex() {
  updateIndex('./plugins/phaser-ui/components');
}

if (args[2] === 'update') {
  if (args[3]) {
    if (args[3] === 'u') {
      // updateUIPluginIndex();
      console.log(`${colors.bold(colors.red(`This command is disabled.`))}`); // eslint-disable-line no-console
    }
    if (args[3] === 'c') {
      updateComponentIndex();
      console.log(`${colors.bold(colors.blue(`Component list updated.`))}`); // eslint-disable-line no-console
    }
    if (args[3] === 's') {
      updateSceneIndex();
      console.log(`${colors.bold(colors.blue(`scenes list updated.`))}`); // eslint-disable-line no-console
    }
  } else {
    updateComponentIndex();
    updateSceneIndex();
    console.log(`${colors.bold(colors.blue(`All list updated.`))}`); // eslint-disable-line no-console
  }
}

if (args[2] === 'help' || !args[2]) {
  // eslint-disable-next-line
  console.log(`${colors.bold(colors.bgRed('Here is the full list of available cmmand:'))}
  scene: create game scene
  obj || object: create game object
  comp || component: create phaser-ui plugin component
  ${colors.bold(colors.green('----------------------------------------------'))}
${colors.bold(colors.red('update'))}
  u - for updating phaser-ui plugin component in root level
  c - for updating phaser-ui plugin component list
  s - for updating game scene list

${colors.bold(`*for help - ${colors.cyan('node cli help')}`)}
  `);
}
