'use strict'

module.exports.BEAUTIFY = 'beautify'
module.exports.KEYVALUES = ['select', 'where', 'rightJoin', 'leftJoin', 'innerJoin', 'join']
module.exports.INVALID_MYSQL_COMMANDS = ['drop', 'truncate', 'update', 'create']
module.exports.SELECTALL = '*'
module.exports.DB_CREATION_TIME = 'create_time as creationTime'
module.exports.DB_UPDATE_TIME = 'update_time as updateTime'
module.exports.DB_ENGINE = 'engine as engine'

module.exports.DB_INFORMATION_SCHEMA_COLUMNS = '`information_schema`.`columns`'
module.exports.DB_INFORMATION_SCHEMA_TABLE = '`information_schema`.`tables`'
module.exports.DB_INFORMATION_SCHEMA_KEY_COLUMN = '`information_schema`.`key_column_usage`'