

const WorkoutDetails = ({ workout }) => {
    return ( 
        
    <div className="card bg-light mb-3 shadow-sm" style={{width:700, height:110, lineHeight:'0.9'}}>
        <div className="card-body text-dark">
            <h4 className="card-title text-success" style={{fontSize:20, marginBottom: '0.5rem', fontWeight:"bold"}}>{workout.title}</h4>
            <p style={{fontSize:13.5, marginBottom: '0.5rem'}}><strong>Load (kg):</strong>{workout.load}</p>
            <p style={{fontSize:13.5, marginBottom: '0.5rem'}}><strong>Reps:</strong>{workout.reps}</p>
            <p style={{fontSize:13.5}}>{workout.createdAt}</p>
        </div>
    </div>


        // <div className="workout-details">
        //     <h4 className="text-success">{workout.title}</h4>
        //     <p><strong>Load (kg):</strong>{workout.load}</p>
        //     <p><strong>Reps:</strong>{workout.reps}</p> 
        //     <p>{workout.createdAt}</p>
        // </div>
     );
}
 
export default WorkoutDetails;