const db = require('../database/db');

const store = (body, callback) => {
    db.query({
        sql: 'INSERT INTO tb_inventory SET ?',
        timeout: 4000,
        values: {...body },
    }, (err, result)=> {
        console.log(result);
        return callback(err,result);
    })
};

module.exports = {
    store,
};