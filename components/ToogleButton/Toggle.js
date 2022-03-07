import { Component } from "react";


export default class ToggleSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedin: false,
      
    };
  }
  componentDidMount() {
    if (this.props.value === "true") {
      this.setState({ isloggedin: true });

      this.setState({ checked: false });
    } else {
      this.setState({ isloggedin: false });
      this.setState({ checked: true });
     
    }
   
  }
 

  render() {
    return (
     
       
      <div className="toggle">
        
          <input
            disabled={this.state.isloggedin}
            type="checkbox"
            name="checkbox"
            class="cm-toggle green"
       
          />
          
         <h6>High priority</h6>
       
        
      </div>
      
    );
  }
}