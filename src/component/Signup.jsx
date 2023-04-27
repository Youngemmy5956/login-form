import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

import './home.css'

export default function Signup() {
    const navigate = useNavigate();
  return (
    <div>

<div class="fos">
            
            {/* <div >
    
                <h1>FACEBOOK</h1>
                  <h3>Connect with friends and the world around you on FACEBOOK</h3>
                </div> */}




                <hr />
    
    
                  <div class="des">

                    <h1>Signup</h1>
                    <p>It's quick and easy</p>

                    <hr />
                  <form action="">
                    <input type="text" id='em' placeholder='First Name'/> <input type="text" id='em' placeholder='Last Name'/>  <br />
                    <input type="text" id='ems' placeholder='Email or Mobile number'/> <br />
                    <input type="text" id='ems' placeholder='New Password'/> <br />


                             <p>Date of birth?</p>
                    <select name="" id="res">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="" selected>3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                    </select>

                    <select name="" id="res">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="" selected>3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                    </select>

                    <select name="" id="res">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="" selected>3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                    </select>

                    <br />

                     <button id='lo'>Log in</button> <br />
                     <button id='fo'>Forgot account?</button> <br />
                     <button onClick={() => navigate('/')} id='cna'>Create New Account</button>
                  </form>
                  </div>
    
            </div>
         

    </div>
  )
}
