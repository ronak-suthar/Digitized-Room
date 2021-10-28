import React, { Component } from 'react'
import firebase from 'firebase'

export class Available extends Component {

    handleChange = async (status) => {
        let data = firebase.database().ref("Status");
        let currStatus = 0;

        await data.once('value').then(snapshot => {
            console.log(snapshot.val());
            currStatus=snapshot.val();
        });

        console.log(currStatus,status)

        if(currStatus!==status){
            data.update({
                status
              })
              .then(() => console.log('Data updated.'));
        }
    }
    render() {
        return (
            <div style={{ marginTop: '20rem' }}>
                <h3 style={{color: 'black'}}>Set Availablity Status</h3>
                <button type="button" style={{ marginRight:'2rem' }} class="btn btn-success btn-lg" onClick={() => this.handleChange(true)}>Available</button>
                <button type="button" class="btn btn-danger btn-lg" onClick={() => this.handleChange(false)}>Busy In Meeting</button>
            </div>
        )
    }
}

export default Available
