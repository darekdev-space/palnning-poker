import express, {Application} from 'express';
import cors from 'cors';
import {PORT} from './constants';
import logger from './tools/logger';
import http from 'http';
import SocketController from './socket/socket';

class App {
    private app: Application = express();
    private httpServer: http.Server;

    private middleware(): void {
        this.app.use(cors());
    }

    private startApp(): void {
        this.httpServer = this.app.listen(PORT, () => {
            logger.info(`Server starting on port: ${PORT}`);
        });
    }

    private startSocket(): void {
        const socket = new SocketController(this.httpServer);
        socket.connect();
    }

    run() {
        this.middleware();
        this.startApp();
        this.startSocket();
    }
}

const service = new App();
service.run();
