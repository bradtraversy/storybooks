const fs = require('fs-extra');

try {
  if (fs.existsSync('./.env')) {
    console.log('.env already exists. Skipping file creation.');
  } else if (fs.existsSync('./.env.example')) {
    fs.copySync('./.env.example', './.env');
    console.log('.env created from .env.example.');
  } else if (fs.existsSync('./config/config.env.example')) {
    fs.copySync('./config/config.env.example', './.env');
    console.log('.env created from legacy config/config.env.example.');
  } else {
    console.log('No environment example file found. Skipping .env creation.');
  }
} catch (err) {
  console.error(err);
}
