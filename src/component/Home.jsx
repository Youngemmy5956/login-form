import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';


import './home.css'

export default function Home() {
    const navigate = useNavigate();
  return (
    <div>
          <p>This is the homepage</p>
           <p>Click on this to enter Create page</p>
           <a href="/create">Create</a>


        <div class="fos">
            
        <div >

            <h1>FACEBOOK</h1>
              <h3>Connect with friends and the world around you on FACEBOOK</h3>
            </div>


              <div class="des">
              <form action="">
                <input type="text" id='em' placeholder='Email or Phone Number'/>  <br />
                <input type="text" id='em' placeholder='Password'/> <br />
                 <button id='lo'>Log in</button> <br />
                 <button id='fo'>Forgot account?</button> <br />
                 <button onClick={() => navigate('/signup')} id='cna'>Create New Account</button>
              </form>
              </div>

        </div>
          



           <form class="row g-3">
  <div class="col-md-2">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value="Mark" required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value="Otto" required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
 
    <button onClick={() => navigate('/create')} class="btn btn-primary" type="submit">Submit form</button>

    
  </div>
</form>



    </div>
  )
}
