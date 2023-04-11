
import React, { useState } from 'react'
import validator from 'validator'
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    //states define 
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [middlename, setMiddleName] = useState("");
    const [organizationname, setOrganizationname] = useState("");
    const [gstnumber, setGstnumber] = useState();
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [mob, setMob] = useState();

    const navigate = useNavigate();


    const registerData = async () => {

        if (validator.isEmail(email)) {

            if (firstname && email) {
                let result = await fetch('http://localhost:5000/register', {
                    method: 'post',
                    body: JSON.stringify({
                        firstname, lastname, middlename, organizationname,
                        gstnumber, address, mob, email
                    }),

                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                result = await result.json();
                console.log(result);
                navigate('/succ');
                alert("You have successfully signUp.")
            }

            else {
                alert("Enter valid details!");
            }
        } 
        
        else {
            alert("Enter valid email!")
        }
    }


    return (
        <div className='register'>

            <h1>SignUP</h1>

            <input type='text' value={firstname} onChange={(e) => setFirstName(e.target.value)}
                placeholder='Your Name' />
            <input type='text' value={lastname} onChange={(e) => setLastName(e.target.value)}
                placeholder='Your Last Name' />
            <input type='text' value={middlename} onChange={(e) => setMiddleName(e.target.value)}
                placeholder='Your Middle Name' />

            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder='Your Email' />

            <input type='text' value={organizationname} onChange={(e) => setOrganizationname(e.target.value)}
                placeholder='Your Organization' />

            <input type='text' value={gstnumber} onChange={(e) => setGstnumber(e.target.value)}
                placeholder='Your GST number' />

            <textarea type='text' value={address} onChange={(e) => setAddress(e.target.value)}
                placeholder='Your Address' />

            <input type='text' value={mob} onChange={(e) => setMob(e.target.value)}
                placeholder='Your Mobile number' />


            <div className="button" onClick={registerData} >signUp</div>

        </div>
    )
}

export default Register;