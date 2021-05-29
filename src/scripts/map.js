import fs from 'fs';

export const createAllTablesScript = fs.readFileSync('./src/scripts/create_tables.sql', 'utf-8');
