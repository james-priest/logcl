/**
 * console.log or new line
 * @param {*} data
 */
exports.cl = function( data ) { console.log( data || "" ); };

/**
 * console.log title
 * @param {*} title
 */
exports.clt = function( title ) { console.log( title || "" ); };

/**
 * console.log with 2 space indent
 * @param {*} data 
 */
exports.cli = function( data ) { console.log( " ", data || "" ); };

/**
 * console.log with label and data. data is indented 2 spaces
 * @param {*} label 
 * @param {*} data
 */
exports.cll = function( label, data ) { 
    console.log( label );
    console.log( " ", data );
};

/**
 * console.log with dashes before label
 * @param {*} label 
 */
exports.cld = function( label ) { console.log( "---------- " + label || "" ); };
