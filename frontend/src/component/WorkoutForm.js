import { useState } from "react";


const WorkoutForm = () => {
    // create three states for title, load and reps
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);


    // const handlesubmit async and sets the state to an empty string 
    const handleSubmit = async (e) => {
        e.preventDefault();

        // dummy workout body
        const workout = { title, load, reps };  
        
        // make a POST request to /api/workouts with data taken from our states
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: { 'Content-Type': 'application/json' },
            })

            // json await response and set the state back to an empty string after adding it to the database
            const json = await response.json();

            if(!response.ok) {
                setError(json.error);
            } 
            if (response.ok) {
                setTitle('');
                setLoad('');
                setReps('')
                setError(null)
                console.log("Workout added!", json);

            }
            
        }      
    
    return ( 
        // create a form with 3 import fields: title, load and reps
        <form className="create" onSubmit={handleSubmit}>
            <h6>Add a New Workout</h6>

                {/* title */}
            <div className="form-group">
                <label style={{fontSize:13.5}}>Excersize Title</label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

                {/* load */}
            <div className="form-group">
                <label style={{fontSize:13.5}}>Load (in kg):</label>
                <input type="text" className="form-control" value={load} onChange={(e) => setLoad(e.target.value)} />
            </div>

                {/* reps */}
            <div className="form-group">
                <label style={{fontSize:13.5}}>Reps</label>
                <input type="number" className="form-control mb-3" value={reps} onChange={(e) => setReps(e.target.value)} />
            </div>

                {/* submit button */}
            <button type="submit" className="btn btn-success pointer-event ">Add Workout</button>
            {error && <div className="error">{error}</div>}
            
        </form>
        
    );
}
 
export default WorkoutForm;