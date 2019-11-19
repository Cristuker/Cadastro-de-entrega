const fs = require('fs');
const { promisify } = require('util')

const writeFileAsync = promisify(fs.writeFile);

const FormModel= {
    name:String,
    lastname:String,
    email:String,
    phone:String,
    country:String,
    language:String,

    addresShipping1:String,
    addresShipping2:String,
    shippingCity:String,
    shippingState:String,
    shippingzipCode:String,

    addresBilling1:String,
    addresBilling2:String,
    billingCity:String,
    billingState:String,
    billingzipCode:String,
    sameAddres:String,
    

    vehicleWithFuel:String,
    tracksOnBike:String,
    identifyDrivers:String,
    trackersQuantities:String
};



    FormJson = JSON.stringify(FormModel)
    name = toString(Date.now())
    fs.writeFile(`../${name}.json,${name}.json`,FormJson, error =>{
        if(error){
            console.error('Erro ao salvar o arquivo'+error)
        }else{
            console.log('Arquivo salvo!')
        }
        
    })

    async function writeInfo(){
        
        await writeFileAsync(name,JSON.stringify(FormModel))
    }

    writeInfo()


module.exports = FormModel;