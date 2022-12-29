'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.get('/', jsonku.index);

    app.get('/data', jsonku.datasiswa)
    
    app.get('/component', jsonku.dash)
    
    //get by ID
    app.get('/:id', jsonku.ID)

}