import React,{ useState } from 'react';
import './Form.css'
function Form() {


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
    const [sameAddres,setSameAddres] = useState(undefined);
    //Checkboxes
    const [vehicleWithFuel,setVehicleWithFuel] = useState(undefined);
    const [tracksOnBike,setTracksOnBike] = useState(undefined);
    const [identifyDrivers,setidentifyDrivers] = useState(undefined);
    const [driversIdentify,setDriversIdentify] = useState();

    async function handleSubmit(event){
        event.preventDefault();
        console.log(sameAddres?'mesmo endereço':'outroend');
    }

    
    return (
    <> 
        <form  onSubmit={handleSubmit} id="container">
           
            <div className="section">
                <div  id="Contact">
                    <h1>Contact Information:</h1>
                    <input type="text" className="inpuText" value={name} onChange={event => setName(event.target.value)} placeholder="First Name:"/>
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
                        <select name="Language"  value={language} onChange={event => setLanguage(event.target.value)} placeholder="Language">
                            <option selected="selected">Language:</option>
                            <option value="Português">Português</option>
                            <option value="English">English</option>
                            <option value="Espanhol">Espanhol</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="section">
                <div action="" id="Shipping" className="">
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
                        <select name="ZIP Code" value={zi} placeholder="ZIP Code">
                            <option selected="selected">ZIP Code:</option>
                            <option value="43223">43223</option>
                            <option value="523987">523987</option>
                            <option value="342342">342342</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="section"> 
                <div action="" id="Billing"className="Form">
                    <h1>Billing Address:</h1>
                    <input type="text" className="inpuText"  placeholder="Addres Line1:"/>
                    <input type="text" className="inpuText"  placeholder="Addres Line2:"/>
                    <div className="selecteds">
                        <select name="City" id="" placeholder="City">
                            <option value="Guaruja">Guarujá</option>
                            <option value="Santos">Santos</option>
                            <option value="SaoVicente">São Vicente</option>
                        </select>
                        <select name="State" id="" placeholder="State">
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="ES">Espirito Santos</option>
                        </select>
                        <select name="ZIP Code" id="" placeholder="ZIP Code">
                            <option value="43223">43223</option>
                            <option value="523987">523987</option>
                            <option value="342342">342342</option>
                        </select>
                    </div>
                    <input type="checkbox" id="ShippingSameBilling" sameAddres={sameAddres} onChange={event => setSameAddres(event.target.value)}/>
                    <label htmlFor="ShippingSameBilling">Use shipping addres same as billing address.</label>
                </div>
            </div>

            <div className="section">
                <div action="" id="CheckBox"className="Form">
                    <h1>Check the box below:</h1>
                    <input type="checkbox" name="vehicleFuel" className="box"/>Does any vehicle need to be equiped with a fuel cut off device?<br/>
                    <input type="checkbox" name="trackersOnBike" className="box"/>Will any trackers be installed on a bike, truck or machinery?<br/>
                    <input type="checkbox" name="identifyDrivers" className="box"/>Will you need to identify the fleet drivers?<br/>
                    <select name="" id="" placeholder="How many trackers would you like to purchase?">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <button className="btn" type="submit">Order Now</button>
        </form>
       
       
    </>
    )
}

export default Form;