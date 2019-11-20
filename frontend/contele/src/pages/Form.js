import React from 'react';
import { useFormik,Field,Formik } from 'formik'
import './Form.css'
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
    }else if(!values.phone.length < 9){
        errors.phone = 'Invalid number';
    }

    if(!values.country){
        errors.phone = 'Required';
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
    if(values.sameAddres){

    }else{
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
        country:[],
        language:[],

        addresShipping1:"",
        addresShipping2:"",
        shippingCity:[],
        shippingState:[],
        shippingzipCode:[],

        addresBilling1:"",
        addresBilling2:"",
        billingCity:[],
        billingState:[],
        billingzipCode:[],
        sameAddres:false,
            

        vehicleWithFuel:false,
        tracksOnBike:false,
        identifyDrivers:false,
        trackersQuantities:false

    },
    validate,
    onSubmit: values => {
        alert(JSON.stringify(values,null,2))
    }
})


return(
    <Formik>
        <form onSubmit={formik.handleSubmit} id="container">
            <div className="section">
                <div  id="Contact">
                    <h1>Contact Information:</h1>
                    <Field type="name" className="inpuText" id="name" onChange={formik.handleChange} value={formik.values.name} placeholder="First Name:" />
                    {formik.errors.name? <div className="required">{formik.errors.name}</div>:null}
                    <Field type="text" className="inpuText" id="lastname" onChange={formik.handleChange} value={formik.values.lastname} placeholder="Last Name:"/>
                    {formik.errors.lastname? <div className="required">{formik.errors.lastname}</div>:null}
                    <Field type="email" className="inpuText" id="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Email Adress:"/>
                    {formik.errors.email? <div className="required">{formik.errors.email}</div>:null}
                    <Field type="tel" className="inpuText" id="phone" onChange={formik.handleChange} value={formik.values.phone} placeholder="Phone:"/>
                    {formik.errors.phone? <div className="required">{formik.errors.phone}</div>:null}
                    
                    <div className="selecteds">
                        <Field as="select" name="country" value={formik.values.country} onChange={formik.handleChange} id="country">
                            <option value="">Country:</option>
                            <option value="Brazil">Brazil</option>
                            <option value="UnitedStates">United States</option>
                            <option value="Mexico">Mexico</option>
                        </Field>
                        {formik.errors.country? <div className="required">{formik.errors.country}</div>:null}
                        <Field as="select" name="language" value={formik.values.language} onChange={formik.handleChange} id="language">
                            <option value="">Language:</option>
                            <option value="Português">Português</option>
                            <option value="English">English</option>
                            <option value="Espanhol">Espanhol</option>
                        </Field>
                        {formik.errors.language? <div className="required">{formik.errors.language}</div>:null}
                    </div>
                </div>
            </div>
            <div className="section">
                <div id="shipping">
                <h1>Shipping Address:</h1>
                    <Field type="text" name="addresShipping1" className="inpuText" id="addresShipping1" onChange={formik.handleChange} value={formik.values.addresShipping1} placeholder="Addres Line1:"/>
                    {formik.errors.addresShipping1? <div className="required">{formik.errors.addresShipping1}</div>:null}
                    <Field type="text" name="addresShipping2" onChange={formik.handleChange} value={formik.values.addresShipping2} className="inpuText" placeholder="Addres Line2:"/>
                    {formik.errors.addresShipping2? <div className="required">{formik.errors.addresShipping2}</div>:null}
                    <div className="selecteds">
                        <Field as="select" id="shippingCity" name="shippingCity" onChange={formik.handleChange} value={formik.values.shippingCity}>
                            <option value="">City:</option>
                            <option value="Guaruja">Guarujá</option>
                            <option value="Santos">Santos</option>
                            <option value="SaoVicente">São Vicente</option>
                        </Field>
                        {formik.errors.shippingCity? <div className="required">{formik.errors.shippingCity}</div>:null}
                        <Field as="select" id="shippingState" onChange={formik.handleChange} value={formik.values.shippingState} name="shippingState" >
                            <option value="">State:</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="ES">Espirito Santos</option>
                        </Field>
                        {formik.errors.shippingState? <div className="required">{formik.errors.shippingState}</div>:null}
                        <Field as="select" id="shippingzipCode" name="shippingzipCode" onChange={formik.handleChange} value={formik.values.shippingzipCode} >
                            <option value="">ZIP Code:</option>
                            <option value="43223">43223</option>
                            <option value="523987">523987</option>
                            <option value="342342">342342</option>
                        </Field>
                        {formik.errors.shippingzipCode? <div className="required">{formik.errors.shippingzipCode}</div>:null}
                    </div>
                </div>
            </div>
            <div className="section">
                <div id="Billing">
                <h1>Billing Address:</h1>
                    <Field type="text" className="inpuText" id="addresBilling1" onChange={formik.handleChange} value={formik.values.addresBilling1} placeholder="Addres Line1:"/>
                    {formik.errors.addresBilling1? <div className="required">{formik.errors.addresBilling1}</div>:null}
                    <Field type="text" className="inpuText" id="addresBilling2" onChange={formik.handleChange} value={formik.values.addresBilling2} placeholder="Addres Line2:"/>
                    {formik.errors.addresBilling2? <div className="required">{formik.errors.addresBilling2}</div>:null}
                    <Field as="select" id="billingCity" name="billingCity" value={formik.values.billingCity} onChange={formik.handleChange} >
                        <option value="">City:</option>
                        <option value="Guaruja">Guarujá</option>
                        <option value="Santos">Santos</option>
                        <option value="SaoVicente">São Vicente</option>
                    </Field>
                    {formik.errors.billingCity? <div className="required">{formik.errors.billingCity}</div>:null}
                    <Field as="select" id="billingState" name="billingState" value={formik.values.billingState} onChange={formik.handleChange} >
                        <option value="">State:</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="ES">Espirito Santos</option>
                    </Field>
                    {formik.errors.billingState? <div className="required">{formik.errors.billingState}</div>:null}
                    <Field as="select" id="billingZipCode" name="billingZipCode" value={formik.values.billingZipCode} onChange={formik.handleChange} >
                        <option value="">ZIP Code:</option>
                        <option value="43223">43223</option>
                        <option value="523987">523987</option>
                        <option value="342342">342342</option>
                    </Field>
                    {formik.errors.billingZipCode? <div className="required">{formik.errors.billingZipCode}</div>:null}

                    {formik.values.sameAddres ? <Field component="input"  checked type="checkbox" id="sameAddres" className="box" value={formik.values.sameAddres} onChange={formik.handleChange}/>:<Field component="input" type="checkbox" id="sameAddres" className="box" value={formik.values.sameAddres} onChange={formik.handleChange}/> }
                    <label htmlFor="sameAddres"className="lbl">Use shipping addres same as billing address.</label>
                </div>
            </div>
            <div className="section">
                <div id="CheckBox">
                    <h1>Check the box below:</h1>
                    
                    {formik.values.vehicleWithFuel?<Field component="input" type="checkbox" id="vehicleWithFuel"  className="box" checked  value={formik.values.vehicleWithFuel} onChange={formik.handleChange}  />:<Field component="input"  type="checkbox" id="vehicleWithFuel"  className="box" value={formik.values.vehicleWithFuel} onChange={formik.handleChange}  />}
                    <label htmlFor="vehicleWithFuel"className="lbl">Does any vehicle need to be equiped with a fuel cut off device</label>
                    {formik.values.tracksOnBike ? <Field component="input" type="checkbox" id="tracksOnBike" className="box" checked value={formik.values.tracksOnBike} onChange={formik.handleChange}/>:<Field component="input" type="checkbox" id="tracksOnBike" className="box" value={formik.values.tracksOnBike} onChange={formik.handleChange}/> }
                    <label htmlFor="tracksOnBike"className="lbl">Will any trackers be installed on a bike, truck or machinery?</label>
                    {formik.values.identifyDrivers ? <Field component="input" type="checkbox" id="identifyDrivers" className="box" checked value={formik.values.identifyDrivers} onChange={formik.handleChange}/>:<Field component="input" type="checkbox" id="identifyDrivers" className="box" value={formik.values.identifyDrivers} onChange={formik.handleChange}/>}
                    <label htmlFor="identifyDrivers"className="lbl" >Will you need to identify the fleet drivers?</label>
                    <Field  as="select" id="trackersQuantities" placeholder="" onChange={formik.handleChange} value={formik.values.shippingzipCode}>
                            <option value="">How many trackers would you like to purchase?</option>
                            {[0,1,2,3,4,].map(i => <option value={i}>{i}</option >)}
                    </Field>
               </div>
            </div>
            <button className="btn" type="submit">Order Now</button>
        </form>
    </Formik>
    )//return
}//function


export default FormOrder;