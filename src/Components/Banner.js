import { valueToNode } from '@babel/types';
import { template } from 'lodash';
import React, { Component } from 'react'
import { useState,useEffect} from 'react'
import firebase from './Firebase'

function Banner() {

    const [temp,setTemp]=useState(0);
    const [humidity,setHumidity]=useState(0);

    useEffect(()=>{
        const data = firebase.database().ref("Sensor Data");
        data.on('value',snapshot=>{
            let newTemp = snapshot.val().temp;
            let newHumidity = snapshot.val().humidity;
            setTemp(newTemp)
            setHumidity(newHumidity)
            console.log("Running");
        });
    },[])

    console.log(temp);

    return (
        <div>
            <div class="container">
                <div class="background">
                    <div class="Circle1"></div>
                    <div class="Circle2"></div>
                    <div class="Circle3"></div>
                    <div class="content">
                        <h1 class="Condition">Weather Info</h1>
                        <h1 class="Temp">Temprature : {temp} <span id="F">&#8457;</span> Humidity : {humidity}%</h1>
                        {/* <h1 class="Time">09:35</h1>
                        <h1 class="Location"><i class="material-icons locationIcon">place</i> Raleigh, NC</h1> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner

