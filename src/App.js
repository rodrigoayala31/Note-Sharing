import React from 'react';
import './App.css';
import firebase from "./config/firebase-config";

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

  handleChange(event, key) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const db = firebase.firestore();
    db.collection("notes").add({
      topic: this.state.topic,
      description: this.state.description,
      collegeName: this.state.collegeName,
      courseName: this.state.courseName,
    })
    this.setState({
      topic: "",
      description: "",
      collegeName: "",
      courseName: "",
    })
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
            <input type="file" name="noteFile" accept="image/*, .pdf" className="inputFile"/>
          </div>
          <div>
            <label>
              Topic
              <input type="text" name="topic" className="topic, inputCSS" value={this.state.topic} onChange={event => this.handleChange(event, "topic")} />
            </label>
          </div>
          <div>
            <label>
              Description 
              <input type="text" name="description" className="description, inputCSS" value={this.state.description} onChange={event => this.handleChange(event, "description")} />
            </label>
          </div>
          <div>
            <label>
              College Name 
              <input type="text" name="collegeName" className="collegeName, inputCSS" value={this.state.collegeName} onChange={event => this.handleChange(event, "collegeName")} />
            </label>
          </div>
          <div>
            <label>
              Course Name  
              <input type="text" name="courseName" className="courseName, inputCSS" value={this.state.courseName} onChange={event => this.handleChange(event, "courseName")} />
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
