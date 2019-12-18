import { Photon } from '@prisma/photon'

const photon = new Photon()

// A `main` function so that we can use async/await
async function main() {
  const foos = await photon.foos.findMany({
    where: {
      a: {
        some: {
          b: {
            some: {
              c: {
                v1: {
                  lt: 0,
                },
                v2: false,
                v3: true,
                d: {
                  id: {
                    not: '',
                  },
                },
              },
            },
          },
        },
      },
    },
  })

  console.log(foos)
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
