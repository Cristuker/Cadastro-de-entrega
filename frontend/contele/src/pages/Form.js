import React from 'react';
import { useFormik,Field,Formik } from 'formik'
import './main.css'
import api from '../services/api';


const validate = values =>{

    const errors = {};
    //Contact 
    if(!values.name){
        errors.name = 'Required';
    }else if(!values.name.length > 15){
        errors.name = 'Must be 15 characters or less';
    }
    if(!values.lastname){
        errors.lastname = 'Required';
    }else if(!values.lastname.length > 20){
        errors.lastname = 'Must be 20 characters or less';
    }

    if(!values.email){
        errors.email = 'Required';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email addresss';
    }

    if(!values.phone){
        errors.phone = 'Required';
    }else if(!values.phone.length >= 11){
        errors.phone = 'Invalid number';
    }

    if(!values.country){
        errors.country = 'Required';
    }
    if(!values.language){
        errors.language = 'Required';
    }

    //Shipping addres
    if(!values.addresShipping1){
        errors.addresShipping1 = 'Required';
    }else if(!values.addresShipping1.length > 30){
        errors.addresShipping1 = 'Invalid shipping addres'
    }

    if(!values.addresShipping2){
        errors.addresShipping2 = 'Required';
    }else if(!values.addresShipping2.length > 30){
        errors.addresShipping2 = 'Invalid shipping addres'
    }

    if(!values.shippingCity){
        errors.shippingCity = 'Required'
    }

    if(!values.shippingState){
        errors.shippingState = 'Required'
    }

    if(!values.shippingzipCode){
        errors.shippingzipCode = 'Required'
    }
    //Billing Addres
    if(!values.sameAddres){
        if(!values.addresBilling1){
            errors.addresBilling1 = 'Required';
        }else if(!values.addresBilling1.length > 30){
            errors.addresBilling1 = 'Invalid shipping addres'
        }
    
        if(!values.addresBilling2){
            errors.addresBilling2 = 'Required';
        }else if(!values.addresBilling2.length > 30){
            errors.addresBilling2 = 'Invalid shipping addres'
        }
    
        if(!values.billingCity){
            errors.billingCity = 'Required'
        }
    
        if(!values.billingState){
            errors.billingState = 'Required'
        }
        
        if(!values.billingState){
            errors.billingState = 'Required'
        }
    }


    return errors;
}



function FormOrder({history}) {

const formik = useFormik({
    initialValues:{
        name:"",
        lastname:"",
        email:"",
        phone:"",
        country:"",
        language:"",

        addresShipping1:"",
        addresShipping2:"",
        shippingCity:"",
        shippingState:"",
        shippingzipCode:"",

        addresBilling1:"",
        addresBilling2:"",
        billingCity:"",
        billingState:"",
        billingzipCode:"",
        sameAddres:false,
            

        vehicleWithFuel:false,
        tracksOnBike:false,
        identifyDrivers:false,
        trackersQuantities:false

    },
    validate,
    onSubmit: async values => {
        await api.post('/status',values)
        
    }
})

function setStatus(error) {
    if (error ==='Required' || error === "" ) {
      return {
        border: '1px solid red'
      }
    }else{
        return {
        border:'1px solid #b7b7b7'
        } 
    }
  }
  

return(
    <Formik>
        <form onSubmit={formik.handleSubmit} id="container">
            <div className="section"id="Contact">
                <div className="titulo">
                    <h1>Contact Information:</h1>
                </div>
                <Field type="name" style={setStatus(formik.errors.name, 'name')} className="inpuText" id="name" onChange={formik.handleChange} value={formik.values.name} placeholder="First Name:" />
                    
                <Field type="text" style={setStatus(formik.errors.lastname, 'lastname')} className="inpuText" id="lastname" onChange={formik.handleChange} value={formik.values.lastname} placeholder="Last Name:"/>
                    
                <Field type="email" style={setStatus(formik.errors.email, 'email')} className="inpuText" id="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Email Adress:"/>
                        
                <Field type="tel" style={setStatus(formik.errors.phone, 'phone')} className="inpuText" id="phone" onChange={formik.handleChange} value={formik.values.phone} placeholder="Phone:"/>
                    
                <Field as="select" style={setStatus(formik.errors.country, 'country')} className="inpuText" id="country" name="country" value={formik.values.country} onChange={formik.handleChange} >
                    <option value="">Country:</option>
                    <option value="Brazil">Brazil</option>
                    <option value="UnitedStates">United States</option>
                    <option value="Mexico">Mexico</option>
                </Field>
                    
                <Field as="select" style={setStatus(formik.errors.language, 'language')} className="inpuText" id="language" name="language" value={formik.values.language} onChange={formik.handleChange}>
                    <option value="">Language:</option>
                    <option value="Português">Português</option>
                    <option value="English">English</option>
                    <option value="Espanhol">Espanhol</option>
                </Field>
            </div>

            <div className="section"id="shipping">
                <div className="titulo">
                    <h1>Shipping Address:</h1>
                </div>
                <Field type="text" style={setStatus(formik.errors.addresShipping1, 'addresShipping1')} className="inpuText" name="addresShipping1"  id="addresShipping1" onChange={formik.handleChange} value={formik.values.addresShipping1} placeholder="Addres Line1:"/>
                    
                <Field type="text" style={setStatus(formik.errors.addresShipping2, 'addresShipping2')} className="inpuText" name="addresShipping2" id="addresShipping2"  onChange={formik.handleChange} value={formik.values.addresShipping2} placeholder="Addres Line2:"/>
                    
                <div className="selecteds">
                    <Field as="select" style={setStatus(formik.errors.shippingCity, 'shippingCity')} className=" shippingSelect" name="shippingCity" id="shippingCity" onChange={formik.handleChange} value={formik.values.shippingCity}>
                        <option value="">City:</option>
                        <option value="Guaruja">Guarujá</option>
                        <option value="Santos">Santos</option>
                        <option value="SaoVicente">São Vicente</option>
                    </Field>
                        
                    <Field as="select" style={setStatus(formik.errors.shippingState, 'shippingState')} className=" shippingSelect" name="shippingState" id="shippingState" onChange={formik.handleChange} value={formik.values.shippingState} >
                        <option value="">State:</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="ES">Espirito Santos</option>
                    </Field>

                    <Field as="select" style={setStatus(formik.errors.shippingzipCode, 'shippingzipCode')} className=" shippingSelect" name="shippingzipCode" id="shippingzipCode" onChange={formik.handleChange} value={formik.values.shippingzipCode} >
                        <option value="">ZIP Code:</option>
                        <option value="43223">43223</option>
                        <option value="523987">523987</option>
                        <option value="342342">342342</option>
                    </Field>
                </div>
                
            </div>
            
            <div className="section"id="Billing">

                <div className="titulo">
                    <h1>Billing Address:</h1>
                </div>

                <Field type="text" style={setStatus(formik.errors.addresBilling1, 'addresBilling1')} className="inpuText" name="addresBilling1" id="addresBilling1" onChange={formik.handleChange} value={formik.values.addresBilling1} {...formik.values.sameAddres ? 'disabled': null} placeholder="Addres Line1:"/>

                <Field type="text" style={setStatus(formik.errors.addresBilling2, 'addresBilling2')} className="inpuText" name="addresBilling2" id="addresBilling2" onChange={formik.handleChange} value={formik.values.addresBilling2} placeholder="Addres Line2:"/>
                    
                <div className="selecteds">
                <Field  as="select" style={setStatus(formik.errors.billingCity, 'billingCity')} className="billingSelect" name="billingCity" id="billingCity" value={formik.values.billingCity} onChange={formik.handleChange} >
                    <option value="">City:</option>
                    <option value="Guaruja">Guarujá</option>
                    <option value="Santos">Santos</option>
                    <option value="SaoVicente">São Vicente</option>
                </Field>
                    
                <Field as="select" style={setStatus(formik.errors.billingState, 'billingState')} className="billingSelect" name="billingState" id="billingState" value={formik.values.billingState} onChange={formik.handleChange} >
                    <option value="">State:</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="ES">Espirito Santos</option>
                </Field>
                    
                <Field as="select" style={setStatus(formik.errors.billingState, 'billingState')} className="billingSelect" name="billingZipCode" id="billingZipCode" value={formik.values.billingZipCode} onChange={formik.handleChange} >
                    <option value="">ZIP Code:</option>
                    <option value="43223">43223</option>
                    <option value="523987">523987</option>
                    <option value="342342">342342</option>
                </Field>
                    
                </div>
                {formik.values.sameAddres ? <Field component="input" checked type="checkbox" id="sameAddres" className="box" value={formik.values.sameAddres} onChange={formik.handleChange}/>:<Field component="input" type="checkbox" id="sameAddres" className="box" value={formik.values.sameAddres} onChange={formik.handleChange}/> }
                <label htmlFor="sameAddres"className="lbl">Use shipping addres same as billing address.</label>
            </div>
            
            <div className="section"id="CheckBox">
                <div className="titulo">
                    <h1>Check the box below:</h1>
                </div>
                    
                {formik.values.vehicleWithFuel?<Field component="input" type="checkbox" id="vehicleWithFuel"  className="box alignBox" checked  value={formik.values.vehicleWithFuel} onChange={formik.handleChange}  />:<Field component="input"  type="checkbox" id="vehicleWithFuel"  className="box" value={formik.values.vehicleWithFuel} onChange={formik.handleChange}  />}
                <label htmlFor="vehicleWithFuel"className="lbl">Does any vehicle need to be equiped with a fuel cut off device</label>
                    
                {formik.values.tracksOnBike ? <Field component="input" type="checkbox" id="tracksOnBike" className="box alignBox" checked value={formik.values.tracksOnBike} onChange={formik.handleChange}/>:<Field component="input" type="checkbox" id="tracksOnBike" className="box" value={formik.values.tracksOnBike} onChange={formik.handleChange}/> }
                <label htmlFor="tracksOnBike"className="lbl">Will any trackers be installed on a bike, truck or machinery?</label>
                    
                {formik.values.identifyDrivers ? <Field component="input" type="checkbox" id="identifyDrivers" className="box alignBox" checked value={formik.values.identifyDrivers} onChange={formik.handleChange}/>:<Field component="input" type="checkbox" id="identifyDrivers" className="box" value={formik.values.identifyDrivers} onChange={formik.handleChange}/>}
                <label htmlFor="identifyDrivers"className="lbl" >Will you need to identify the fleet drivers?</label>
                    
                <Field  as="select" id="trackersQuantities" placeholder="" onChange={formik.handleChange} value={formik.values.trackersQuantities}>
                    <option value="">How many trackers would you like to purchase?</option>
                    {[0,1,2,3,4,].map(i => <option key={i} value={i}>{i}</option >)}
                </Field>
            </div>
            
            <button className="btn" type="submit">Order Now</button>
        
        </form>
    </Formik>
    )
}


export default FormOrder;