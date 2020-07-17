import React from 'react';
import { db } from "./config/firebase-config";

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
            <div className='Dashboard'>
                <h1>Notes</h1>
                {
                    this.state.notes && 
                    this.state.notes.map( note => {
                        return (
                            <div>
                                <p>{note.collegeName}</p>
                                <p>{note.courseName}</p>
                                <p>{note.description}</p>
                                <p>{note.topic}</p>
                                <img src={note.url} alt='Uploaded Images' />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default Dashboard;
