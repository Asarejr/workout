import { useEffect, useState } from "react";

// components
import WorkoutDetails from '../component/WorkoutDetails';
import WorkoutForm from '../component/WorkoutForm';



const Home = () => {
// lets create a new state object and initialize it with the current state of our app. 
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        // fetch the api from the backend
        const fetchWorkout = async () => {
            const response = await fetch("/api/workouts"); 
            const json = await response.json();
            
                if(response.ok) {
                    setWorkouts(json);
                }
        };

        fetchWorkout()
    }, []);

    return (
        <div className="home d-flex">
            <div className="workout w-100">
                {workouts && workouts.map((workout) =>(
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <div className="flex-shrink-3 pe-5"> <WorkoutForm /> </div>
        </div>

    );
}
 
export default Home;