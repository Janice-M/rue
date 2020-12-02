const fastify = require('fastify'); //Bring in Fastify
const PORT = process.env.PORT || 3000;
const app = fastify({
    logger: true
})

const fastify = require('fastify'); //Bring in Fastify
const PORT = process.env.PORT || 3000;
const app = fastify({
    logger: true
})
//Funtion To run the server
const start = async () => {
    try {
      await app.listen(PORT)
      app.log.info(`server listening on ${app.server.address().port}`)
    } catch (err) {
      app.log.error(err)
      process.exit(1)
    }
  }