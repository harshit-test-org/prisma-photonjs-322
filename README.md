# Introduction

This repository contains reproduction for https://github.com/prisma/photonjs/issues/322

# To Reproduce

1. Clone and migrate the database using `prisma2 dev`
2. Run `yarn dev`, see the panic
3. Remove the `d` level from the photon query, the error will go away
