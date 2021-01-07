// import { AttributeResponse, AttributeListResponse } from '../src/lib/api/types';
const http = require('http');

const strMock = {
  name: 'str',
  base: 10,
  modifier: 5
};

const dexMock = {
  name: 'dex',
  base: 10,
  modifier: 2
};

const conMock = {
  name: 'con',
  base: 10,
  modifier: 2
};

const intMock = {
  name: 'int',
  base: 10,
  modifier: 2
};

const wisMock = {
  name: 'wis',
  base: 10,
  modifier: 2
};

const chaMock = {
  name: 'cha',
  base: 10,
  modifier: 2
};

const attribute = [strMock, dexMock, conMock, intMock, wisMock, chaMock];
const requestListener = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  switch (req.url) {
    case '/attributes':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(attribute));
      res.end();
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Resource not found' }));
  }
};

const server = http.createServer(requestListener);
server.listen(1234);
