const mysql = require('mysql2')
const { createConnection } = require("./conn");
exports.addRecord = async (tbl, data, conn = null) => {
  try {
   const connection = conn || createConnection();
    var query = 'INSERT ?? SET ? '
    query = mysql.format(query, [tbl, data])
    const result = await executeQuery(connection, query);
    return result
  } catch (error) {
    throw error
  }
}
exports.addMultipleRecords = async (tbl, columns, data, conn = null) => {
  try {
   const connection = conn || createConnection();
    var query = 'INSERT INTO ?? (??) VALUES ? '
    query = mysql.format(query, [tbl, columns, data])
    const result = await executeQuery(connection, query);
    return result
  } catch (error) {
    throw error
  }
}
exports.updateRecord = async (tbl, data, whr, conn = null) => {
  try {
   const connection = conn || createConnection();
    var query = 'UPDATE ?? SET ? WHERE ?'
    query = mysql.format(query, [tbl, data, whr])
    const result = await executeQuery(connection, query);
    return result
  } catch (error) {
    throw error
  }
}
exports.delRecord = async (tbl, whr, conn = null) => {
  try {
   const connection = conn || createConnection();
    var query = 'DELETE FROM ?? WHERE ?'
    query = mysql.format(query, [tbl, whr])
    const result = await executeQuery(connection, query);
    return result
  } catch (error) {
    throw error
  }
}
exports.getDetails = async (query, queryData, conn = null) => {
  try {
   const connection = conn || createConnection();
    var qry = mysql.format(query, queryData)
    const rows = await executeQuery(connection, qry);
    return rows
  } catch (error) {
    throw error
  }
}

