import React from 'react';
import { useFormik,Field,Form,Formik } from 'formik'
import './Form.css'
import api from '../services/api';


const validate = values =>{

    const errors = {};
    
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
    }else if(!values.phone.length > 9){
        errors.phone = 'Invalid number';
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
                        <Field as="select" name="language" value={formik.values.language} onChange={formik.handleChange} id="language">
                            <option value="">Language:</option>
                            <option value="Português">Português</option>
                            <option value="English">English</option>
                            <option value="Espanhol">Espanhol</option>
                        </Field>
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
                            <option value={[]}>City:</option>
                            <option value="Guaruja">Guarujá</option>
                            <option value="Santos">Santos</option>
                            <option value="SaoVicente">São Vicente</option>
                        </Field>
                        {formik.errors.shippingCity? <div className="required">{formik.errors.shippingCity}</div>:null}
                        <Field as="select" id="shippingState" onChange={formik.handleChange} value={formik.values.shippingState} name="shippingState" >
                            <option selected="selected">State:</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="ES">Espirito Santos</option>
                        </Field>
                        <Field as="select" id="shippingZipCode" name="shippingZipCode" onChange={formik.handleChange} value={formik.values.shippingzipCode} >
                            <option value="">ZIP Code:</option>
                            <option value="43223">43223</option>
                            <option value="523987">523987</option>
                            <option value="342342">342342</option>
                        </Field>
                    </div>
                </div>
            </div>
            <button className="btn" type="submit">Order Now</button>
        </form>
    </Formik>
    )//return
}//function


export default FormOrder;