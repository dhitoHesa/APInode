'use strict';

var response = require('./res');
var connection = require('./connection')

exports.index = function(req, res){
    response.ok("Aplikasi REST API berjalan!", res)
};

//database
exports.datasiswa = function(req,res){
    connection.query('SELECT * FROM siswa', function(err, rows, fields){
        if(err){
            connection.log(err);
        } else{
            response.ok(rows, res)
        }
    });
};

// Get By ID
exports.ID = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM siswa WHERE id = ?',[id], 
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        };
    });
};

// Dashboard API
exports.dash = function(req,res){
    connection.query('SELECT * FROM testing', function(err, rows, fields){
        if(err){
            connection.log(err);
        } else{
            response.ok(rows,res)
        }
    });
};