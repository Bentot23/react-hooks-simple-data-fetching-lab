import { useEffect, useState } from "react";
import {data} from "../mocks/data"
// create your App component here
function App() {
    const [dogBreed, setDogBreed] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            // console.log(data.message)
            setDogBreed(data.message);
            setIsLoaded(true)
        });
    }, []);

    if(!isLoaded) return <p>Loading...</p>;

    return <img src={dogBreed} alt="A Random Dog" />
}

export default App;