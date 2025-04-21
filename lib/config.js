const path = require('path');
global.IS_PROD = process.env.IS_PROD || 0
if (IS_PROD == 0) {
 const projectRootPath = path.join(process.cwd(), '../.env')
 require("dotenv").config({ path: `${projectRootPath}` })
}
require("dotenv").config();

global.PORT = process.env.PORT || 3000;
global.DB_TYPE = process.env.DB_TYPE || 1;
global.SECRET_KEY = process.env.SECRET_KEY || 'NoThiNg';
global.MONGO_DB_USER = process.env.MONGO_DB_USER || '';
global.MONGO_DB_USER_PWD = process.env.MONGO_DB_USER_PWD || '';
global.MONGO_DB_HOST = process.env.MONGO_DB_HOST || '';
global.MONGO_DB_NAME = process.env.MONGO_DB_NAME || '';

global.SQL_DB_HOST = process.env.SQL_DB_HOST || '';
global.SQL_DB_USER = process.env.SQL_DB_USER || '';
global.SQL_DB_PWD = process.env.SQL_DB_PWD || '';
global.SQL_DB_NAME = process.env.SQL_DB_NAME || '';


// Status codes
global.SUCCESS_CODE = 200;
global.INVALID_REQUEST_CODE = 400;
global.AUTH_ERROR_CODE = 401;
global.FORBIDDEN_CODE = 403;
global.NOT_FOUND_CODE = 404;
global.DUPLICATE_ENTRY_CODE = 409;
global.VALIDATION_ERROR_CODE = 422;
global.SERVER_ERROR_CODE = 500;
global.SERVICE_UNAVAILABLE_CODE = 503;

// Response messages
global.AUTH_ERROR_MESSAGE = "Authentication failed";
global.FORBIDDEN_MESSAGE = "Access denied";
global.NOT_FOUND_MESSAGE = "Resource not found";
global.DUPLICATE_ENTRY_MESSAGE = "Duplicate entry found";

global.INSERT_SUCCESS = "Data inserted successfully";
global.INSERT_FAILED = "Data insertion failed";
global.UPDATE_SUCCESS = "Data updated successfully";
global.UPDATE_FAILED = "Data updation failed";
global.DELETE_SUCCESS = "Data deleted successfully";
global.DELETE_FAILED = "Data deletion failed";
global.VALIDATION_ERROR_MESSAGE = "Validation failed. Please check your input.";
global.SERVER_ERROR_MESSAGE = "Internal server error. Please try again later.";
global.SERVICE_UNAVAILABLE_MESSAGE = "Service is temporarily unavailable. Please try again later.";


