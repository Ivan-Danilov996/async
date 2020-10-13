import read from './reader'
import json from './parser'

export default class GameSavingLoader {
    static async load() {
        try {
            const response = await read()
            return await json(response)
        } catch (error) {
            return error
        }
    }
}


