import React from 'react'
import User from './User';
import UserClass from './UserClass';


const About = () => {
    return(
        <div>
            <h1>About Us</h1>
            <h2>This is Namste Food App</h2>
           {/*  <User name={"Anshu Raj Singh via Props"}/> */}
            <UserClass name={"Sittu singh via props in class"} location="Pune"/>
        </div>
    )
}

export default About;