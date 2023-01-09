import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
        <form>
  <label for="phone">Phone:</label>
  <input type="tel" id="phone" name="phone" />
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
  <label for="address">Address:</label>
  <textarea id="address" name="address" rows="5" cols="30"></textarea>
  <input class="btn btn-primary" type="submit" value="Submit" />
</form> 
    </>
  )
}

export default Contact