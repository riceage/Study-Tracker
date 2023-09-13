const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url);

    // Check if the requested file is the dashboard
    if (req.url === '/Dashboard/dashboard.html') {
        filePath = path.join(__dirname, 'public', 'Dashboard', 'dashboard.html');
    }

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            return;
        }

        let contentType = 'text/html';
        const extname = path.extname(filePath);
        if (extname === '.css') {
            contentType = 'text/css';
        } else if (extname === '.js') {
            contentType = 'application/javascript';
        }

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
    });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
