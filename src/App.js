import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      description: "",
      collegeName: "",
      courseName: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      topic: event.target.topic,
      description: event.target.description,
      collegeName: event.target.collegeName,
      courseName: event.target.courseName
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
        <h1>Share Notes</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="avatar" className="chooseFile">
              Choose an image or a PDF file:
            </label>
            <input type="file" id="avatar" name="avatar" accept="image/*, .pdf" className="inputFile"/>
          </div>
          <div>
            <label>
              Topic
              <input type="text" name="topic" value={this.state.topic} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              Description 
              <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              College Name 
              <input type="text" name="collegeName" value={this.state.collegeName} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              Course Name  
              <input type="text" name="courseName" value={this.state.courseName} onChange={this.handleChange} />
            </label>
          </div>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}
  
  export default App;
