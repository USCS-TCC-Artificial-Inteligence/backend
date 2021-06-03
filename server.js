import './src/config/db';
import startupServer from './src/config/startup_server';
import dotenv from 'dotenv';
dotenv.config();

startupServer().then();
