const colors = require('colors/safe');
const createFile = require('create-file');

const dir = './plugins/phaser-ui/components/';

function createTemplate(name) {
  return `export default class ${name} {
  // constructor() {}
}
`;
}

module.exports = name => {
  if (name) {
    const template = createTemplate(name);
    if (template) {
      createFile(`${dir}/${name}/index.js`, template, err => {
        if (!err) {
          console.log(
            `${colors.bold(colors.green(`Component named ${colors.cyan(name)} created.`))}`
          ); // eslint-disable-line no-console
        } else {
          console.log(`${colors.bold(colors.red(`Component named ${name} already exists.`))}`); // eslint-disable-line no-console
          // file either already exists or is now created (including non existing directories)
          console.log(err); // eslint-disable-line
        }
      });
    }
  } else {
    console.log(`${colors.bold(colors.red('Component Name is required'))}`); // eslint-disable-line no-console
  }
};
