import {Server as SocketServer} from 'socket.io';
import http from 'http';
import logger from '../tools/logger';

class SocketController {
    private io: SocketServer;

    constructor(server: http.Server) {
        this.init(server);
    }

    private init(server: http.Server) {
        this.io = new SocketServer(server);
    }

    public connect() {
        this.io.on('connection', () => {
            logger.info('Connected!');
        });
    }
}

export default SocketController;
