import React from "react"
import logo from "../Images/troll-face.png"
import "../style.css"

/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */


export default function Header () {
    return(
        <div className = "header">
            <img src={logo} className = "logo" alt="logo" />
            <h1 className = "logo-name">Meme Generator!</h1>
            <h5 className = "project-name">React Course - Project 3</h5>
        </div>
    )
}