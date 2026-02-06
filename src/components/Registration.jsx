
import './Registration.css'

export default function Registration() {

    return (
        
       <form action="onSubmit">
            <label>
                <input type="text" placeholder="Provide your name"/>
                <input type="email" placeholder="Provide your email here"/>
                <input type="Password" placeholder="Provide your Password here"/>
            </label>
            <button>Submit</button>

        </form>
    );
}
