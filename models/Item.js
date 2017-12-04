var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var customItemSchema = require( './ItemSchemaCustom.js' );
var medicationItemSchema = require( './ItemSchemaMedication.js' );
var options =
    {
        discriminatorKey: 'type'
    };

// Define collection and schema for Items
var Item = new Schema(
    customItemSchema,
    options
 );

// define discriminator for meds
var Medication = new Schema(
    medicationItemSchema,
    options
)


var baseModel = mongoose.model( 'Item', Item );

baseModel.discriminator( 'MEDICATION', Medication );

//baseModel.discriminator( 'ASSISTIVE', Assistive );

module.exports = baseModel;
