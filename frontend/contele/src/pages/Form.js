import React from 'react';
import './Form.css'
function Form() {
    return (
    <> 
        <div id="container">
           
            <div className="section">
                <form action="" id="Contact">
                    <h1>Contact Information:</h1>
                    <input type="text" className="inpuText" placeholder="First Name"/>
                    <input type="text" className="inpuText" placeholder="Last Name"/>
                    <input type="email" className="inpuText" placeholder="Email Adress"/>
                    <input type="tel" className="inpuText" placeholder="Phone"/>
                    
                    <div className="selecteds">
                        <select name="Country"  placeholder="Country">
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
                </form>
            </div>

            <div className="section">
                <form action="" id="Shipping" className="">
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
                </form>
            </div>

            <div className="section"> 
                <form action="" id="Billing"className="Form">
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
                    
                </form>
            </div>

            <div className="section">
                <form action="" id="CheckBox"className="Form">
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
                </form>
            </div>

        </div>
       
       <button type="submit">Order Now</button>
    </>
    )
}

export default Form;