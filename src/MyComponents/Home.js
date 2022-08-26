import React from 'react'
import '../App.css';
import { useHistory } from "react-router-dom";

export default function Home() {

    const history = useHistory();
    const gotoSearch = () => {
        history.push(`/search`);
    };

    return (
        <>
        <div style={{marginLeft:350,fontWeight:'bolder',fontSize:40, marginTop: '40px'}}>

        <p>Welcome To AirIndia </p></div>
            <div style={{
                backgroundImage:
                    "url('https://wallpaperaccess.com/full/1470798.jpg')",
                height: '100vh',
                marginTop: '-120px',
                fontSize: '50px',
                backgroundSize: 'cover',
            }}>

                <button style={{ marginTop: "10%", marginLeft: "35%" }} className="btn btn-primary" onClick={() => gotoSearch()}>Search your Flights here..</button>
            </div>

        </>
    )
}