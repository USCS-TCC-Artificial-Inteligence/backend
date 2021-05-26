import app from '../../index';
import initializeDB from './initialize_db';
import logger from './logger';

const startupServer = async () => {
  await initializeDB();

  return app.listen(process.env.SERVER_PORT, (err) => {
    if (err) throw err;
    logger.info(`Server running in http://localhost:${process.env.SERVER_PORT}`);
  });
};

export default startupServer;
