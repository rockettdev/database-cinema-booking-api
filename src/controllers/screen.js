const { Prisma } = require("@prisma/client")
const prisma = require('../utils/prisma')

const createScreen = async (req, res) => {
    const { number } = req.body

    if (!number) {
        return res.status(400).json({
            error: "Missing fields in request body"
        })
    }

    const createdScreen = await prisma.screen.create({
        data: {
            number
        }
    })
    return res.status(201).send( {screen: createdScreen} )
  }

module.exports = {
    createScreen
}
