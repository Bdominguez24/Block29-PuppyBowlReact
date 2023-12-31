import React, {useState} from 'react';
import { createPlayer } from '../../API';
import {useNavigate} from "react-router-dom"
import './NewPlayerForm.css';

export default function NewPlayerForm() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("bench");
    const [imageUrl, setImageUrl] = useState( 
        "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png"
        );

    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const player = await createPlayer({
                name,
                breed,
                status,
                imageUrl,
            });
            if(player.success){
                alert("New Puppy added!");
                navigate("/");
            } else {
                "Something went wrong with submission. Please try again!"
            }
        } catch (err) {
            console.log(err);
        }
}

  return (
    <div className='new-player-form'>
        <h1>Add a new player!</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Breed:
                <input type="text" onChange={(e) => setBreed(e.target.value)}/>
            </label>
            <label>
                Image Url:
                <input type="text" onChange={(e) => setImageUrl(e.target.value)}/>
            </label>
            <label>
                Status:
                <select onChange={(e) => setStatus(e.target.value)}>
                    <option value="field">Field</option>
                    <option selected value="bench">Bench</option>
                </select>
            </label>
            <button style={{ width: "25%", margin: "0 auto"}}>Add Puppy</button>
        </form>
    </div>
  )
}
