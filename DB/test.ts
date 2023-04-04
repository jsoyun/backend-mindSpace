// const { PrismaClient } = require('@prisma/client') 

// const prisma = new PrismaClient()
const {PrismaClient} = require('@prisma/client')
const prisma= new PrismaClient()

console.log("test",prisma.User)

async function main() {
  const allUsers = await prisma.User.create({
    data:{
      email :"되니?"
    }
  })
  console.log(allUsers)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
