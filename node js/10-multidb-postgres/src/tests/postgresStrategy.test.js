const assert = require('assert')
const Postgres = require('./../db/strategies/postgres')
const Context = require('./../db/strategies/base/contextStrategy')

const context = new Context(new Postgres())
const MOCK_HEROI_CADASTRAR = {
    nome: 'Gaviao Negro',
    poder: 'Flechas Mágicas'
}


describe('Postgres Strategy', function () {
    this.timeout(Infinity);
    this.beforeAll(async () => {
        await context.connect()
    })
    it('PostgresSql Connection', async () => {
        const result = await context.isConnected()
        assert.equal(result, true)
    })

    it('cadastrar', async () => {
        const result = await context.create(MOCK_HEROI_CADASTRAR)
        console.log(result)
        // delete result.id
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })
})