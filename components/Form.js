import React, { Component } from 'react'
import GfgDatePicker from './Datepicker'
import ToggleButton from './ToogleButton/ToogleButton'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const options = [
 'me', 'Amanda cortez', 'Ken jenson', 'peter Marshall'
];
const option2=[
  "eApp/emed for Life&Di","smart office","NetX360"
]
const defaultOption = options[0];
export default class Form extends Component {
  
  render() {
    return (
<div><h3 className="header">New To-do item</h3><form>
  <label className='title'>
  Title
 
  <br></br> 
    <input className='name'  placeholder='Your description goes here' type="text" name="name" />
  </label>
  <br></br>

  <label className='priority'>
      <br></br>
  Priority Level<span className='optn'>(optional)</span>
  <br></br>
  <ToggleButton/>
  </label>
  <br></br>
 <GfgDatePicker/>
 <br></br>
 <label className='title'>Assigned to
 <br>
 </br>
 </label>
 
<Dropdown className='ttle' options={options} onChange={this._onSelect}  placeholder="Select an option" />
<br>
</br>
<label className='title'>Tools
 <br>
 </br>
 </label>
 
<Dropdown className='ttle' options={option2} onChange={this._onSelect}  placeholder="Select an option" />
<label className='title'>Notes<br></br>
<input  className='desc'  placeholder='Your description goes here' type="text" name="name"/></label>
<br></br>
<br></br>
<button type="button" class="btn btn-danger">cancel</button>
&nbsp;&nbsp;&nbsp;
<button type="button" class="btn btn-primary">submit</button>
</form></div>
    )
  }
}
