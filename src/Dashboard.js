import React from 'react';
import { db } from "./config/firebase-config";
import './Dashboard.css';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: []
        };
    }

    componentDidMount(){
        db.collection("notes").get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            this.setState({ notes: data });
        });
        
    }

    render() {
        return (
            <div className='dashboard'>
                <h1>Notes</h1>
                {
                    this.state.notes && 
                    this.state.notes.map( note => {
                        return (
                            <div className='content'>
                                <p>{note.collegeName}</p>
                                <p>{note.courseName}</p>
                                <p>{note.description}</p>
                                <p>{note.topic}</p>
                                <embed src={note.url} width= "500" height= "600"></embed>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default Dashboard;
