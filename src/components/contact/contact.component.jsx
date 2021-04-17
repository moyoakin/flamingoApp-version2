import React from 'react'

import './contact.styles.css'

function Contact(){

    return (
        <div className="container">
            <h1>Sign Up Today</h1>
           
            <!-- Form -->
            <form className="form">
                <!-- Full Name -->
                <div lassName="form-group">
                    <label for="name">Full Name</label>
                   <input type="text" id="name" placeholder="Full Name" required minlength="3"  maxlength="100" name="name">
                </div>

                <!-- Phone # -->
                <div className="form-group">
                        <label for="phone">Phone Number</label>
                       <input type="tel" id="phone" placeholder="555-555-5555" required pattern="((1\s|\B)?\(?[0-9]{3}[-\s)]\s?[0-9]{3}[-\s][0-9]{4}|[0-9]{10})" name="phone">
                    </div>

                     <!-- Email # -->
                    <div class="form-group">
                            <label for="Email">Email Address</label>
                           <input type="email" id="email" placeholder="email@address.com" required name="email">
                        </div>

                        <!-- Website -->
                    <div class="form-group">
                            <label for="website">Website</label>
                           <input type="url" id="website" placeholder="https://asynclearning.io" required minlength="3" maxlength="100" name="website">
                        </div>

                        <!-- Password -->
                    <div class="form-group">
                            <label for="password1">Password</label>
                           <input type="password" id="password1" placeholder="create password" required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" title="Please enter an Uppercase a lowercase and a number" name="password">
                        </div>

                           <!-- confirm Password -->
                    <div class="form-group">
                            <label for="password2"> Confirm Password</label>
                           <input type="password" id="password2" placeholder="confirm password"required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$">
                        </div>

                        <button type="submit"> Register </button>
            </form>

            <div class="message-container">
                <h3 id="message">Don't Hesitate!</h3>
            </div>
    </div>
    )

}