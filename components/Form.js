import React, { Component } from 'react'
import GfgDatePicker from './Datepicker'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ToggleButton from './ToogleButton/ToogleButton'
import ToggleSwitch from './ToogleButton/Toggle';
 

const options = [
 'me', 'Amanda cortez', 'Ken jenson', 'peter Marshall'
];
const option2=[
  "eApp/emed for Life&Di","smart office","NetX360"
]
const defaultOption = options[0];
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',priority:Boolean};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    <GfgDatePicker />
 
    
  }
  render() {
    return (
     
<div> <br></br><br></br><h3 className="header">New To-do item</h3><form onSubmit={this.handleSubmit}>
  <label className='title'>
  Title
 
  <br></br> 
    <input className='name'  placeholder='Your description goes here' type="text" name="name"value={this.state.value} onChange={this.handleChange} />
  </label>
  <br></br>

  <label className='priority'>
      <br></br>
      
  Priority Level<span className='optn'>(optional)</span>
  <br></br>
<ToggleSwitch />
  </label>
  <br></br>
 <GfgDatePicker />
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
<input  classname="btn"type="submit" value="Submit" />
{/* <button type="button" class="btn btn-primary">submit</button> */}
</form></div>
    )
  }
}
