const ICrud = require('./interfaces/interfaceCrud')

class MongoDB extends ICrud {
    
    constructor() {
        super()
    }

    create(item) {
        console.log('O item foi salvo em mongodb')
    }
}

module.exports = MongoDB