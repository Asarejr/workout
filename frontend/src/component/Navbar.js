import { Link } from 'react-router-dom'


const Navbar = () => {
    return ( 
        <header className=" navbar p-5">
            <div className="contianer ">
                <Link to="/" className='text-darker'>
                    <h2
                    style={{marginLeft:90, fontWeight:'bold'}}>
                    Workout Buddy</h2>
                </Link>
            </div>
        </header>
     );
}
 
export default Navbar;