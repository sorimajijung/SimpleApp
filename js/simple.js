// JavaScript Document
var SIMPLE = (function(module){

    module.MakeIt = function(resultObj){
        resultObj.prepend(Date() + ' <br />');
    };

    return module;
}(SIMPLE || {})
);