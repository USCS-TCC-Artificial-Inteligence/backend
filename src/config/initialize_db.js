import db from './db';
import fs from 'fs';
import logger from './logger';

const createAllTables = fs.readFileSync('./src/scripts/create_tables.sql', 'utf-8');

const initializeDB = async () => {
  try {
    logger.info('Initializing database, please wait...');
    await db.none(createAllTables);
    logger.info('Initialization complete.');
  } catch (err) {
    throw err;
  }
};

export default initializeDB;
