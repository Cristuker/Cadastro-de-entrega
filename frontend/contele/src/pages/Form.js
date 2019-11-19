import React from 'react';
import api from '../services/api';
import { useFormik,Field,Form,Formik } from 'formik'
import './Form.css'



function FormOrder({history}) {
    <Formik
      initialValues={{
        isAwesome: false,
        terms: false,
        newsletter: false,
        jobType: ['designer'],
        location: [],
      }}
      />
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
        onSubmit: values =>{
            alert(JSON.stringify(values, null, 2))
        }
    })

    async function handleSubmit(event){

        event.preventDefault();
        
        await api.post('/status',)

        history.push('/status')
    }

    
    return (
    <> 
        <form  onSubmit={handleSubmit} id="container">
           
            <div className="section">
                <div  id="Contact">
                    <h1>Contact Information:</h1>
                    <input type="name" className="inpuText"  onChange={formik.handleChange} value={formik.values.name} placeholder="First Name:" />
                    <input type="text" className="inpuText" onChange={formik.handleChange} value={formik.values.lastname} placeholder="Last Name:"/>
                    <input type="email" className="inpuText" onChange={formik.handleChange} value={formik.values.email} placeholder="Email Adress:"/>
                    <input type="tel" className="inpuText" onChange={formik.handleChange} value={formik.values.phone} placeholder="Phone:"/>
                    
                    
                    <div className="selecteds">
                        <Field component="select" id="country" name="country" multiple={true} >
                            <option selected="selected">Country:</option>
                            <option value="Brazil">Brazil</option>
                            <option value="UnitedStates">United States</option>
                            <option value="Mexico">Mexico</option>
                        </Field>
                        <Field component="select" id="language" name="language" multiple={true} >
                            <option selected="selected">Language:</option>
                            <option value="Português">Português</option>
                            <option value="English">English</option>
                            <option value="Espanhol">Espanhol</option>
                        </Field>
                    </div>
                </div>
            </div>

            <div className="section">
                <div action="" id="Shipping" >
                    <h1>Shipping Address:</h1>
                    <input type="text" name="AdressLine1" onChange={formik.handleChange} value={formik.values.addresShipping1} className="inpuText" placeholder="Addres Line1:"/>
                    <input type="text" name="AdressLine2" onChange={formik.handleChange} value={formik.values.addresShipping2} className="inpuText" placeholder="Addres Line2:"/>
                    
                    <div className="selecteds">
                        <Field component="select" id="shippingCity" name="shippingCity" multiple={true}>
                            <option selected="selected">City:</option>
                            <option value="Guaruja">Guarujá</option>
                            <option value="Santos">Santos</option>
                            <option value="SaoVicente">São Vicente</option>
                        </Field>
                        <Field component="select" id="shippingState" name="shippingState" multiple={true}>
                            <option selected="selected">State:</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="ES">Espirito Santos</option>
                        </Field>
                        <Field component="select" id="shippingZipCode" name="shippingZipCode" multiple={true}>
                            <option selected="selected">ZIP Code:</option>
                            <option value="43223">43223</option>
                            <option value="523987">523987</option>
                            <option value="342342">342342</option>
                        </Field>
                    </div>
                </div>
            </div>

            <div className="section"> 
                <div action="" id="Billing">
                    
                            <>
                                <h1>Billing Address:</h1>
                                <input type="text" className="inpuText" onChange={formik.handleChange} value={formik.values.addresBilling1} placeholder="Addres Line1:"/>
                                <input type="text" className="inpuText" onChange={formik.handleChange} value={formik.values.addresBilling2} placeholder="Addres Line2:"/>
                                <div className="selecteds">
                                    <Field component="select" id="billingCity" name="billingCity" multiple={true}>
                                        <option selected="selected">City:</option>
                                        <option value="Guaruja">Guarujá</option>
                                        <option value="Santos">Santos</option>
                                        <option value="SaoVicente">São Vicente</option>
                                    </Field>
                                    <Field component="select" id="billingState" name="billingState" multiple={true}>
                                        <option selected="selected">State:</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="ES">Espirito Santos</option>
                                    </Field>
                                    <Field component="select" id="billingZipCode" name="billingZipCode" multiple={true}>
                                        <option selected="selected">ZIP Code:</option>
                                        <option value="43223">43223</option>
                                        <option value="523987">523987</option>
                                        <option value="342342">342342</option>
                                    </Field>
                                </div>
                                </>
                   
                }
                    <Field type="checkbox" id="ShippingSameBilling" className="box" />
                    <label htmlFor="ShippingSameBilling">Use shipping addres same as billing address.</label>
                </div>
            </div>

            <div className="section">
                <div id="CheckBox">
                    <h1>Check the box below:</h1>
                    <Field type="checkbox" name="vehicleFuel" className="box"/>Does any vehicle need to be equiped with a fuel cut off device?<br/>
                    <Field type="checkbox" name="trackersOnBike"  className="box"/>Will any trackers be installed on a bike, truck or machinery?<br/>
                    <Field type="checkbox" name="identifyDrivers" className="box"/>Will you need to identify the fleet drivers?<br/>
                    <div className="selecteds">
                        <Field  name="Trackers" component="select" id="trackersQuantities" placeholder="How many trackers would you like to purchase?">
                            {[0,1,2,3,4,].map(i => <option value={i}>{i}</option >)}
                        </Field>
                    </div>
                </div>
            </div>
            <button className="btn" type="submit">Order Now</button>
        </form>
       
       
    </>
    )
}

export default FormOrder;