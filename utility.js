const fs = require('node:fs')
const path = require('node:path')

const utility = (loadPath, filter, callback) => {
    const files = fs.readdirSync(loadPath).filter(filter)
    for (const file of files) {
        const filePath = path.join(loadPath, file)
        const fileContent = require(filePath)
        callback(filePath, fileContent)
    }
}

module.exports = { loadFiles: utility }
