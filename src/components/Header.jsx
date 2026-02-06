import './Header.css';
export default function Header(props) {

    return (
        <div>
            
            <h1>{props.title}</h1>
            <nav>
                <a href="/">Home </a> 
                <a href="/about">About </a>  
                <a href="/contact">Contact</a>
            </nav>
            
    
        </div>
    );

        
}
