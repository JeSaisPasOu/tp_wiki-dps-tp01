import http from 'http';

// Permet de configurer le port via la variable d'environnement.
//Si rien port prédéfinie sur 3000
const hostname = '127.0.0.1';
const port = process.env.PING_LISTEN_PORT ? parseInt(process.env.PING_LISTEN_PORT, 10) : 3000;

const server = http.createServer((req, res) => {
  // 
  if (req.method === 'GET' && req.url === '/ping') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    
    // Récupère les informations de la requête HTTP
    const responseData = {
      method: req.method,
      url: req.url,
      headers: req.headers,
    };

    // Renvoie les informations sous forme de JSON
    res.end(JSON.stringify(responseData, null, 2));
  } else {
    // Réponse vide avec code 404 pour toutes les autres requêtes
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});