const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')


class Postgres extends ICrud {
    
    constructor() {
        super()
        this._driver = null
        this._herois = null
    }

    async create(item) {
        // console.log(this._driver)
        console.log('herois', this._herois)
        const {dataValues} = this._herois.create(item)
        return dataValues
    }

    async isConnected() {
        try {
            await this._driver.authenticate()
            return true
        } catch (error) {
            console.log('Fail', error)
            return false
        }
    }

    defineModel() {
        this._herois = this._driver.define(
          'herois',
          {
            id: {
              type: Sequelize.INTEGER,
              required: true,
              primaryKey: true,
              autoIncrement: true,
            },
            nome: {
              type: Sequelize.STRING,
              required: true,
            },
            poder: {
              type: Sequelize.STRING,
              required: true,
            },
          },
          {
            //opcoes para base existente
            tableName: 'TB_HEROIS',
            freezeTableName: false,
            timestamps: false,
          },
        );
        this._herois.sync()
    }

    async connect() {
        this._driver = new Sequelize(
            'heroes',
            'andrepostiga',
            'flusao01',
            {
                host: 'localhost',
                dialect: 'postgres',
                // case sensitive
                quoteIdentifiers: false,
                // deprecation warning
                operatorsAliases: false
            }
        )
        this.defineModel()
    }
}

module.exports = Postgres