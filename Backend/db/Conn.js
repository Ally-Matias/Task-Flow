const mongoose = require('mongoose');
const chalk = require('chalk');

async function main() {
  // Conecta ao banco de dados MongoDB usando a URL 'mongodb://localhost:27017/taskflow'.
  await mongoose.connect('mongodb://localhost:27018/taskflow');
  console.log(chalk.blue('Conectou ao Mongoose!'));
}

main().catch(err => console.log(err));

// Exporta o objeto mongoose para uso em outros módulos.
module.exports = mongoose;
