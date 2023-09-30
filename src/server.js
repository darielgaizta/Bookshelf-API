/* Submission for my lovely Dicoding
 * Author: Fatih Darielma Gaizta
 *
 * P.S. Jujur bingung kenapa harus banget pakai HapiJS, tetapi OK.
 * Bismillah lulus!
 */

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`Server is running on ${server.info.uri}`);
};

init();
