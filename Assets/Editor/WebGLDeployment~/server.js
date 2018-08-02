/** Setting up a basic node express server */

var express = require('express');
var path = require('path');

var server = express();
server.use('/index.html', express.static(path.join(__dirname, 'index.html')));
server.use('/Build', express.static(path.join(__dirname, 'Build')));
server.use('/TemplateData', express.static(path.join(__dirname, 'TemplateData')));

var port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Express Server running at http://localhost:${port}`);
});
