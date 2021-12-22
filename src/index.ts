import express, {Application} from 'express';
import {PORT} from './constants';
import logger from './tools/logger';

class App {
    public server: Application = express();

    run() {
        this.server.listen(PORT, () => {
            logger.info(`Server starting on port: ${PORT}`);
        });
    }
}

const service = new App();
service.run();
