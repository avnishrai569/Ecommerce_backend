const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const app = require('./app');

if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    http.createServer(app).listen(3001, () => {
        console.log('Server is running on port 3001');
    });
}
