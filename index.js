const fastify = require('fastify'); //Bring in Fastify
const PORT = process.env.PORT || 3000;
const app = fastify({
    logger: true
})
const db = require("./config/db")
app.use(db())
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
start();

const fastify = require('fastify')
const config = require('config')
const PORT = process.env.PORT || 3000
const app = fastify({
    logger: true
})
const { sequelize } = require('../../models')
const { User } = sequelize.models

sequelize
    .authenticate()
    .then(() => {
        // eslint-disable-next-line no-console
        console.log('Connection has been established successfully to Postgres')
    })
    .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Unable to connect to the database:', err)
    })
// Declare a route
app.post('/signup', async (request, reply) => {
    const { firstName, lastName, email, password } = request.body
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
        reply.status(409)
        return { error: 'Email already in use' }
    }
    const hash = bcrypt.hashSync(password, saltRounds)
    const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hash
    })
    return newUser
})

const start = async () => {
    try {
        await app.listen(PORT, '0.0.0.0')
        app.log.info(`server listening on ${app.server.address().port}`)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
start()
