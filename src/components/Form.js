import React from 'react';
import data from './../satellites.json';

const ChooseSatellite = (props) => {
   if (props.satellite === "" || props.satellite === null) {
      return (
         <p>You have not selected a satellite yet!</p>
      );
   }

   return (
      <div>
         <p>The satellite selected is: <b>{props.satellite}</b></p>
         <p>If you hit <em>Submit</em>, a report will be sent to the president of the United States about impending planetary destruction</p>
      </div>
   )
}

class Form extends React.Component {
   constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert("Sent warning about approaching objects!");
      event.preventDefault();
    }
  
    render() {
      const satellite = this.state.value;

      return (
         <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select satellite of concern: 
            <select value={this.state.value} onChange={this.handleChange}>
            {data.satellites.map((satellite, index) =>(
                  <option key={index} value={satellite.name}>{satellite.name}</option>
            ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
          <ChooseSatellite satellite={satellite} />
        </form>
      </div>
      );
    }
}

export default Form;