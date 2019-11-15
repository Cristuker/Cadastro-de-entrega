import React,{ useState } from 'react';
import './Form.css'
function Form() {

    const [name,setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');

    const [country,setCountry] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        console.log(country)
    }

    return (
    <> 
        <form  onSubmit={handleSubmit} id="container">
           
            <div className="section">
                <div  id="Contact">
                    <h1>Contact Information:</h1>
                    <input type="text" className="inpuText" value={name} onChange={event => setName(event.target.value)} placeholder="First Name"/>
                    <input type="text" className="inpuText" value={lastname} onChange={event => setLastname(event.target.value)} placeholder="Last Name"/>
                    <input type="email" className="inpuText" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email Adress"/>
                    <input type="tel" className="inpuText" value={phone} onChange={event => setPhone(event.target.value)} placeholder="Phone"/>
                    
                    <div className="selecteds">
                        <select name="Country"  value={country} onChange={event => setCountry(event.target.value)} placeholder="Country">
                            <option value="Brazil">Brazil</option>
                            <option value="UnitedStates">United States</option>
                            <option value="Mexico">Mexico</option>
                        </select>
                        <select name="" id="" placeholder="Language">
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
                    <input type="text" name="" className="inpuText" placeholder="Addres Line1:"/>
                    <input type="text" name="" className="inpuText" placeholder="Addres Line2:"/>
                    
                    <div className="selecteds">
                        
                        <select name="City" id="" className="inpuText" placeholder="City">
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
                    
                        
                            <input type="checkbox" id="ShippingSameBilling"/>
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