import { format } from 'date-fns';
import pino from 'pino';
const logger = pino({
  base: null,
  timestamp: () => `,"time":"${format(new Date(Date.now()), 'dd-MM-yyyy h:mm:ss:a')}"`,
});

export default logger;
