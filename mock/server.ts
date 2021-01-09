import * as http from 'http';
import { skills } from './skills';
import { attributes } from './attr';
import { hitpoints } from './hitpoints';
import { levelzero } from './levelzero';
import { SavingThrows } from './savingThrows';
import { acdcini } from './acdc';

const requestListener = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  switch (req.url) {
    case '/attributes':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(attributes));
      res.end();
      break;
    case '/skills':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(skills));
      res.end();
      break;
    case '/hitpoints':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(hitpoints));
      res.end();
      break;
    case '/acdcini':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(acdcini));
      res.end();
      break;
    case '/levelzero':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(levelzero));
      res.end();
      break;
    case '/savingThrows':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(SavingThrows));
      res.end();
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Resource not found' }));
  }
};

const server = http.createServer(requestListener);
server.listen(1234);
