const Form = require('../models/Form');

module.exports={
    async StorageEvent(request,response){
    
        const contact ={


            name: request.body.name,
            lastname:request.body.lastname,
            email: request.body.email,
            phone: request.body.phone,
            country: request.body.country,
            language: request.body.language,

            addresShipping1: request.body.addresShipping1,
            addresShipping2: request.body.addresShipping2,
            shippingCity: request.body.shippingCity,
            shippingState: request.body.shippingState,
            shippingzipCode: request.body.shippingzipCode,

            addresBilling1: request.body.addresBilling1,
            addresBilling2: request.body.addresBilling2,
            billingCity: request.body.billingCity,
            billingState: request.body.billingState,
            billingzipCode: request.body.billingzipCode,
            sameAddres: request.body.sameAddres,

            vehicleWithFuel: request.body.vehicleWithFuel,
            tracksOnBike: request.body.tracksOnBike,
            identifyDrivers: request.body.identifyDrivers,
            trackersQuantities: request.body.trackersQuantities
        }

    const { name } = request.body;
    const {lastname} = request.body
    const {email} = request.body
    const {phone} = request.body
    /*const {country} = request.bod
    const {language} = request.body

    const {addresShipping1} = request.body
    const {addresShipping2} = request.body
    const {shippingCity} = request.body
    const {shippingState} = request.body
    const {shippingzipCode} = request.body

    const {addresBilling1} = request.bod
    const {addresBilling2} = request.body
    const {billingCity} = request.body
    const {billingState} = request.body
    const {billingzipCode} = request.body
    const {sameAddres} = request.body

    const {vehicleWithFuel} = request.body
    const {tracksOnBike} = request.body
    const {identifyDrivers} = request.body
    const {trackersQuantities} = request.body*/
    console.log(contact);
    return response.json(name);

    }
}