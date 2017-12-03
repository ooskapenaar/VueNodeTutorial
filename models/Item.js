var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema(
    require( './ItemSchema.js' ),
    {
        collection: 'items'
    } );

module.exports = mongoose.model( 'Item', Item );
