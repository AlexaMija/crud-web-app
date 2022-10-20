import React, {useState} from "react";
import "../../component/contactForm/contactForm.css"
export const ContactForm = ({addContactProp}) => {

const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const addContact = () => {
    addContactProp({
id : (new Date).getTime(),
name, phone
})
setName('');
setPhone('');
}


    return <div id="contact-form">
        <p id="p-tag">Contact list</p>
        <input type = "text" id="nameInput" placeholder="Name" value={name} onChange ={
        event => {
            setName(event.target.value)
        }
        } />
        <input type = "text" id="phoneInput" placeholder="Phone number" value={phone} onChange ={
        event => {
            setPhone(event.target.value)
        }
        } />
        <input type="button" id="btn" value="Save" onClick={addContact} />
    </div>;
};