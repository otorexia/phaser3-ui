/* eslint-disable no-console */

const colors = require('colors/safe');
const createFile = require('create-file');

const dir = './plugins/phaser-ui/components/';

function createTemplate(name) {
  return `import ${name} from './${name.toLowerCase()}';\n

/**
 * @param {Phaser.Scene} scene the parent scene for this Component
 * @param {x} x cordinate for this Component
 * @param {x} y cordinate for this Component
 * @param {args} other arguments
 */
export default function(scene, x, y, ...args) {
  const ${name.toLowerCase()} = new ${name}(scene, x, y, args);\n
  return ${name.toLowerCase()};
}
`;
}
function createTemplate2(name) {
  return `export default class ${name} {
  // constructor() {}
}
`;
}

module.exports = name => {
  if (name) {
    const template = createTemplate(name);
    const template2 = createTemplate2(name);
    if (template) {
      createFile(`${dir}/${name}/${name.toLowerCase()}.js`, template2, err => {
        if (err) console.log(err);
      });
      createFile(`${dir}/${name}/index.js`, template, err => {
        if (!err) {
          console.log(
            `${colors.bold(colors.green(`Component named ${colors.cyan(name)} created.`))}`
          );
        } else {
          console.log(`${colors.bold(colors.red(`Component named ${name} already exists.`))}`); // eslint-disable-line no-console
          // file either already exists or is now created (including non existing directories)
          console.log(err);
        }
      });
    }
  } else {
    console.log(`${colors.bold(colors.red('Component Name is required'))}`); // eslint-disable-line no-console
  }
};
