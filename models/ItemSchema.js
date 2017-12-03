module.exports = {
    name: {
        type: String,
        required: [true, 'The name field is mandatory.']
    },
    price: {
        type: Number
    },
    type: {
        default: 'CUSTOM',
        type: String,
        enum: ['ASSISTIVE','MEDICATION','CUSTOM']
    },
    assistiveReference: {
        type: String
    },
    medicationPznNumber: {
        type: Number
    },
    medicationIngredients: {
        type: String
    },
    medicationDose: {
        type: String
    }
};


