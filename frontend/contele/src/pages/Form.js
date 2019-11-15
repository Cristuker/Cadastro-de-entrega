import React from 'react';
import './Form.css'
function Form() {
    return (
    <> 
        <div id="container">
            <form action="" id="Contact"className="Form">
                <h1>Contact Information</h1>
                <input type="text" name="" id="" placeholder="First Name"/>
                <input type="text" name="" id="" placeholder="Last Name"/>
                <input type="email" name="" id="" placeholder="Email Adress"/>
                <input type="tel" name="" id="" placeholder="Phone"/>
                <select name="Country" id="" placeholder="Country">
                    <option value="Brazil">Brazil</option>
                    <option value="United States">United States</option>
                    <option value="Mexico">Mexico</option>
                </select>
                <select name="" id="" placeholder="Language">
                    <option value="Português">Português</option>
                    <option value="English">English</option>
                    <option value="Espanhol">Espanhol</option>
                </select>
            </form>

            <form action="" id="Shipping"className="Form">
                <h1>Shipping Address</h1>
                <input type="text" name="" id="" placeholder="First Name"/>
                <input type="text" name="" id="" placeholder="Last Name"/>
                <input type="email" name="" id="" placeholder="Email Adress"/>
                <input type="tel" name="" id="" placeholder="Phone"/>
                <select name="Country" id="" placeholder="Country">
                    <option value="Brazil">Brazil</option>
                    <option value="United States">United States</option>
                    <option value="Mexico">Mexico</option>
                </select>
                <select name="" id="" placeholder="Language">
                    <option value="Português">Português</option>
                    <option value="English">English</option>
                    <option value="Espanhol">Espanhol</option>
                </select>
            </form>
        </div>
    </>
    )
}

export default Form;