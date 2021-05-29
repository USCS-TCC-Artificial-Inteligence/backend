import db from './db';
import logger from './logger';
import { createAllTablesScript } from '../scripts/map';
import { insertDefaultTags } from './default_data';

const initializeDB = async () => {
  try {
    logger.info('Initializing database, please wait...');
    logger.info('Creating tables...');
    await db.none(createAllTablesScript);
    logger.info('Adding default tags...');
    await insertDefaultTags();
    logger.info('Initialization complete.');
  } catch (err) {
    throw err;
  }
};

export default initializeDB;
