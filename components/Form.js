import React, { Component } from 'react'
import GfgDatePicker from './Datepicker'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ToggleButton from './ToogleButton/ToogleButton'
import ToggleSwitch from './ToogleButton/Toggle';
import  addtask from "../pages/api/graph"

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
    const {accessToken,taskListId,postdata}=props
    this.state = {value: '',value2:''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 this.handledescription=this.handledescription.bind(this)

  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  
  }
  handledescription(event){


  }
  
  handleSubmit(event) {
    
    alert('A name was submitted: ' + this.state.value + this.state.value2);
    this.setState({value2:event.target.value})
    addtask(accessToken,taskListId,postdata)
    event.preventDefault();
    <GfgDatePicker />
 
    
  }
 
  render() {
    return (
     
<div> <br></br><h3 className="header">New To-do item</h3><form onSubmit={this.handleSubmit}>
  <br></br>
  <label className='title'>
  Title
 
  <br></br> 
  
    <input className='name'  placeholder='Your description goes here' type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
  </label>
  <br></br>
  <br></br>

  <label className='priority'>
      <br></br>
      
  Priority Level<span className='optn'>(optional)</span>
  <br></br>

  <ToggleSwitch  />
  </label>
  <br></br>
  <br></br>
 <GfgDatePicker />
 <br></br>
 <br></br>
 {/* <label className='title'>Assigned to
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
 
<Dropdown className='ttle' options={option2} onChange={this._onSelect}  placeholder="Select an option" /> */}

<label className='title'>Notes<br></br>
<input  className='desc'  placeholder='Your description goes here' type="text" name="desc" value2={this.state.value2} onChange={this.handledescription}/></label>
<br></br>
<br></br>
<br></br>
<button type="button" classname="btn2" >Cancel</button>
&nbsp;&nbsp;&nbsp;
<input   type="submit" value="Save" />

</form></div>
    )
  }
}
