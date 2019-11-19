const Form = require('../models/Form');

module.exports={
    async StorageEvent(request,response){

        const OrderInfo ={
            name: request.body.name,
            lastname:request.body.lastname,
            email: request.body.email,
            phone: request.body.phone,
            country: request.body.country,
            language: request.body.language,

            addresShipping1: request.body.addresShipping1,
            addresShipping2: request.body.addresShipping2,
            shippingCity: request.body.shippingCity === 'City:'? '' : request.body.shippingCity,
            shippingState: request.body.shippingState === 'State:'? '' : request.body.shippingState,
            shippingzipCode: request.body.shippingzipCode === 'ZIP Code:' ? '' : request.body.shippingzipCode,

            addresBilling1: request.body.addresBilling1,
            addresBilling2: request.body.addresBilling2,
            billingCity: request.body.billingCity === 'City:' ? '' : request.body.billingCity,
            billingState: request.body.billingState === 'State:' ? '' :request.body.billingState,
            billingzipCode: request.body.billingzipCode === 'ZIP Code:' ? '' :request.body.billingState,
            sameAddres: request.body.sameAddres,


        }

        const BoxInfo = {
            vehicleWithFuel: request.body.vehicleWithFuel,
            tracksOnBike: request.body.tracksOnBike,
            identifyDrivers: request.body.identifyDrivers,
            trackersQuantities: request.body.trackersQuantities
        }
        let ArrayInfo = Object.values(OrderInfo)
        let Fields = Object.entries(OrderInfo)
        console.log(Fields+'teste')
        console.log(ArrayInfo);
        let missing = [];
        let valid = [];
        ArrayInfo.forEach((element,index) => {
            if(element === undefined | element === '' | element === 0){
                missing.push(Fields[index])
            }else{
                valid.push(element)
            }
        });

        if(missing.length > 0){
            OrderInfo.complete = false;
        }else{
            OrderInfo.complete = true;
        }
        OrderInfo.BoxInfo = BoxInfo;
        console.log(OrderInfo)
    return response.json(OrderInfo);

    }
}