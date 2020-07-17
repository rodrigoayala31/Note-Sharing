import './App.css';
import { db } from "./config/firebase-config";
import React from "react";
import firebase from "./config/firebase-config"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
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
    const fileRef = this.inputRef.current.files[0];
    var date = new Date();
    var time = date.getTime();
    var storageRef = firebase.storage().ref();
    const fileName = fileRef.name + time;
    var uploadTask = storageRef.child('notes/' + fileName).put(fileRef);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        //progress function
      }, 
      (error) => {
        console.log(error);
      }, 
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        db.collection("notes").add({
          topic: this.state.topic,
          description: this.state.description,
          collegeName: this.state.collegeName,
          courseName: this.state.courseName,
          url: downloadURL,
        })
        this.setState({
          topic: "",
          description: "",
          collegeName: "",
          courseName: "",
       })
      });
    });
  }


  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
        <h1>Add a Note</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="avatar" className="chooseFile">
              Choose an image or a PDF file:
            </label>
            <input type="file" name="noteFile" accept="image/*, .pdf" className="inputFile" ref={this.inputRef} />
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
            <button type="submit">Add</button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}
  
  export default App;