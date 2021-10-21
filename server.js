const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
const connectHistory = require('connect-history-api-fallback')
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 3000;
app.listen(port);
app.use(connectHistory());