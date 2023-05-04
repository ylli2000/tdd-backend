const app = require('./src/app');
const sequelize = require('./src/config/database');
const TokenService = require('./src/auth/TokenService');
const logger = require('./src/shared/logger');
const FileService = require('./src/file/FileService');
const User = require('./src/user/User');
const seeder = require('./database/seeders/20200803205715-add-users');
sequelize.sync();

TokenService.scheduleCleanup();
FileService.removeUnusedAttachments();

const devMem = async () => {
  if (process.env.NODE_ENV === 'devMem') {
    const seeds = await seeder.seedUsers();
    await User.bulkCreate(seeds);
    console.log(seeds);
  }
};

devMem();

app.listen(8080, () => logger.info('app is running. version: ' + process.env.npm_package_version));
