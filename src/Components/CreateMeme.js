import React from "react"
import "../style.css"

export default function CreateMeme() {
    return (
        <main>
            <form className="meme-form">
                <input type= "text" className="form-input" name="topText" placeholder="Top Text" />
                <input type= "text" className="form-input" name="bottomText" placeholder="Bottom Text" />
                <button className="create-button">Get new meme image!</button>
            </form>

        </main>
    )
}

