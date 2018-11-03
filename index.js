/*
Name: Jae W Ellis
Date: 11/3/2018
Filename: index.js
Purpose: This app imports lodash and jsonfile, then reads a json file thats been hardcoded and then prints whats in the file to the user.
*/




var _ = require('lodash')                                                   //import lodash
var jsonFile = require('jsonfile')                                          //import jsonfile
var file = 'data.json'                                                      //import the file to be read
var jsonData = jsonFile.readFileSync(file);                                 //create a varible to hold files data

_.forEach(jsonData.items, value => {                                        //Create a foreach using lodash to print out file data
    console.log(value.fname + " " + value.lname + " is " + value.age);
});
