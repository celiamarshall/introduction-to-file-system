const path = require('path')

const fs = require('fs')

const directoryName = __dirname

const filePath = path.join(__dirname, 'classmates.txt')

const classmates = fs.readFileSync(filePath, 'utf-8')

const toSave = `${classmates} was here`

//Overwriting the file:
//fs.writeFileSync(filePath, 'Was here', 'utf-8')

fs.writeFileSync(filePath, toSave, 'utf-8')