import React,{ useState } from 'react';
import api from '../services/api';
import './Form.css'



function Form({history}) {

    // Contact Information
    const [name,setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [country,setCountry] = useState('');
    const [language,setLanguage] = useState('');
    //Shipping Addres
    const [addresShipping1,setAddresShipping1] = useState('');
    const [addresShipping2,setAddresShipping2] = useState('');
    const [shippingCity,setShippingCity] = useState('');
    const [shippingState,setShippingState] = useState('');
    const [shippingzipCode,setShippingZipCode] = useState('');
    //Billing Addres
    const [addresBilling1,setAddresBilling1] = useState('');
    const [addresBilling2,setAddresBilling2] = useState('');
    const [billingCity,setBillingCity] = useState('');
    const [billingState,setBillingState] = useState('');
    const [billingzipCode,setBillingZipCode] = useState('');
    const [sameAddres,setSameAddres] = useState(0);
    //Checkboxes
    const [vehicleWithFuel,setVehicleWithFuel] = useState(undefined);
    const [tracksOnBike,setTracksOnBike] = useState(undefined);
    const [identifyDrivers,setIdentifyDrivers] = useState(undefined);
    const [trackersQuantities,setTrackersQuantities] = useState();

    async function handleSubmit(event){
        event.preventDefault();

        let information ={
            name: name,
            lastname:lastname,
            email: email,
            phone: phone,
            country: country,
            language: language,

            addresShipping1: addresShipping1,
            addresShipping2: addresShipping2,
            shippingCity: shippingCity,
            shippingState: shippingState,
            shippingzipCode: shippingzipCode,

            addresBilling1: addresBilling1,
            addresBilling2: addresBilling2,
            billingCity: billingCity,
            billingState: billingState,
            billingzipCode: billingzipCode,
            sameAddres: sameAddres,

            vehicleWithFuel: vehicleWithFuel,
            tracksOnBike: tracksOnBike,
            identifyDrivers: identifyDrivers,
            trackersQuantities: trackersQuantities
        }    
        
        await api.post('/status',information)

        history.push('/status')
    }

    
    return (
    <> 
        <form  onSubmit={handleSubmit} id="container">
           
            <div className="section">
                <div  id="Contact">
                    <h1>Contact Information:</h1>
                    <input type="text" className="inpuText"  value={name} onChange={event => setName(event.target.value)} placeholder="First Name:"/>
                    <input type="text" className="inpuText" value={lastname} onChange={event => setLastname(event.target.value)} placeholder="Last Name:"/>
                    <input type="email" className="inpuText" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email Adress:"/>
                    <input type="tel" className="inpuText" value={phone} onChange={event => setPhone(event.target.value)} placeholder="Phone:"/>
                    
                    
                    <div className="selecteds">
                        <select name="Country"  value={country} onChange={event => setCountry(event.target.value)} placeholder="Country">
                            <option selected="selected">Country:</option>
                            <option value="Brazil">Brazil</option>
                            <option value="UnitedStates">United States</option>
                            <option value="Mexico">Mexico</option>
                        </select>
                        <select name="Language" value={language} onChange={event => setLanguage(event.target.value)} placeholder="Language">
                            <option selected="selected">Language:</option>
                            <option value="Português">Português</option>
                            <option value="English">English</option>
                            <option value="Espanhol">Espanhol</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="section">
                <div action="" id="Shipping" >
                    <h1>Shipping Address:</h1>
                    <input type="text" name="AdressLine1" value={addresShipping1} onChange={event => setAddresShipping1(event.target.value)} className="inpuText" placeholder="Addres Line1:"/>
                    <input type="text" name="AdressLine2" value={addresShipping2} onChange={event => setAddresShipping2(event.target.value)} className="inpuText" placeholder="Addres Line2:"/>
                    
                    <div className="selecteds">
                        <select name="City" value={shippingCity} onChange={event => setShippingCity(event.target.value)} className="inpuText" placeholder="City">
                            <option selected="selected">City:</option>
                            <option value="Guaruja">Guarujá</option>
                            <option value="Santos">Santos</option>
                            <option value="SaoVicente">São Vicente</option>
                        </select>
                        <select name="State" value={shippingState} onChange={event => setShippingState(event.target.value)} placeholder="State">
                            <option selected="selected">State:</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="ES">Espirito Santos</option>
                        </select>
                        <select name="ZIP Code" value={shippingzipCode} onChange={event => setShippingZipCode(event.target.value)} placeholder="ZIP Code">
                            <option selected="selected">ZIP Code:</option>
                            <option value="43223">43223</option>
                            <option value="523987">523987</option>
                            <option value="342342">342342</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="section"> 
                <div action="" id="Billing">
                    { sameAddres ?(
                            <>
                                <h1>Billing Address:</h1>
                                <input type="text" className="inpuText" value={addresBilling1} onChange={event => setAddresBilling1(event.target.value)} placeholder="Addres Line1:"/>
                                <input type="text" className="inpuText" value={addresBilling2} onChange={event => setAddresBilling2(event.target.value)} placeholder="Addres Line2:"/>
                                <div className="selecteds">
                                    <select name="City" value={billingCity} onChange={event => setBillingCity(event.target.value)} placeholder="City">
                                        <option selected="selected">City:</option>
                                        <option value="Guaruja">Guarujá</option>
                                        <option value="Santos">Santos</option>
                                        <option value="SaoVicente">São Vicente</option>
                                    </select>
                                    <select name="State" value={billingState} onChange={event => setBillingState(event.target.value)} placeholder="State">
                                        <option selected="selected">State:</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="ES">Espirito Santos</option>
                                    </select>
                                    <select name="ZIP Code" value={billingzipCode} onChange={event => setBillingZipCode(event.target.value)} placeholder="ZIP Code">
                                        <option selected="selected">ZIP Code:</option>
                                        <option value="43223">43223</option>
                                        <option value="523987">523987</option>
                                        <option value="342342">342342</option>
                                    </select>
                                </div>
                                </>
                            ):(
                                <>
                                    <h1>Billing Address:</h1>
                                    <input type="text" disabled className="inpuText" value={addresBilling1} onChange={event => setAddresBilling1(event.target.value)} placeholder="Addres Line1:"/>
                                    <input type="text" disabled className="inpuText" value={addresBilling2} onChange={event => setAddresBilling2(event.target.value)} placeholder="Addres Line2:"/>
                                    <div className="selecteds">
                                        <select name="City" disabled value={billingCity} onChange={event => setBillingCity(event.target.value)} placeholder="City">
                                            <option selected="selected">City:</option>
                                            <option value="Guaruja">Guarujá</option>
                                            <option value="Santos">Santos</option>
                                            <option value="SaoVicente">São Vicente</option>
                                        </select>
                                        <select name="State" disabled value={billingState} onChange={event => setBillingState(event.target.value)} placeholder="State">
                                            <option selected="selected">State:</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="ES">Espirito Santos</option>
                                        </select>
                                        <select name="ZIP Code" disabled value={billingzipCode} onChange={event => setBillingZipCode(event.target.value)} placeholder="ZIP Code">
                                            <option selected="selected">ZIP Code:</option>
                                            <option value="43223">43223</option>
                                            <option value="523987">523987</option>
                                            <option value="342342">342342</option>
                                        </select>
                                    </div>
                                </>
                        )
                   
                }
                    <input type="checkbox" id="ShippingSameBilling" className="box" sameAddres={sameAddres} onChange={event => setSameAddres(event.target.value)}/>
                    <label htmlFor="ShippingSameBilling">Use shipping addres same as billing address.</label>
                </div>
            </div>

            <div className="section">
                <div id="CheckBox">
                    <h1>Check the box below:</h1>
                    <input type="checkbox" name="vehicleFuel" vehicleWithFuel={vehicleWithFuel} onChange={event => setVehicleWithFuel(event.target.value)} className="box"/>Does any vehicle need to be equiped with a fuel cut off device?<br/>
                    <input type="checkbox" name="trackersOnBike"  tracksOnBike={tracksOnBike} onChange={event => setTracksOnBike(event.target.value)} className="box"/>Will any trackers be installed on a bike, truck or machinery?<br/>
                    <input type="checkbox" name="identifyDrivers" identifyDrivers={identifyDrivers} onChange={event => setIdentifyDrivers(event.target.value)} className="box"/>Will you need to identify the fleet drivers?<br/>
                    <div className="selecteds">
                        <select  name="Trackers" value={trackersQuantities}   onChange={event => setTrackersQuantities(event.target.value)} placeholder="How many trackers would you like to purchase?">
                            {[0,1,2,3,4,].map(i => <option value={i}>{i}</option >)}
                        </select>
                    </div>
                </div>
            </div>
            <button className="btn" type="submit">Order Now</button>
        </form>
       
       
    </>
    )
}

export default Form;