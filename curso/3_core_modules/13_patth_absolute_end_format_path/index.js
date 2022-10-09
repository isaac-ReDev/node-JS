const path = require('path')

//# esse core moduleretornao caminh oabsoluto da File
const absolutePath = path.resolve("13_patth_absolute_end_format_path")

const midFolder = "relatorion"
const fileName  = "isaac.txt"

const finalPath = path.join('/', "archives", midFolder, fileName )

console.log(finalPath)