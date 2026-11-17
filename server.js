const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = 8787;
const TYPES = {'.html':'text/html; charset=utf-8','.webp':'image/webp','.jpg':'image/jpeg',
               '.png':'image/png','.js':'text/javascript','.css':'text/css','.json':'application/json','.ttf':'font/ttf','.mp3':'audio/mpeg'};

http.createServer((req,res)=>{
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const file = path.join(ROOT, p);
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end('no'); }
  fs.readFile(file, (err, buf)=>{
    if (err){ res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, {'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream'});
    res.end(buf);
  });
}).listen(PORT, ()=>console.log('serving '+ROOT+' on http://localhost:'+PORT));
