import { useState,useEffect } from "react";
import Pets from "./Pet.js"


const SearchParams = () => {
  const ANIMALS =["Bird","Dog","Cat","Lion","Tiger","Peacock"]
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed,setBreed]=useState("")
  const [pets,setPets]=useState([])
  const Breeds=[]

  useEffect(()=>{
    requestPets();
  },[])

  async function requestPets(){
    const res=await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
    const json=await res.json();
    console.log(json)
    setPets(json.pets)
  }


  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            placeholder="animal"
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e)=>setAnimal(e.target.value)}
          >
        <option value=""></option>  
    {ANIMALS.map((animal) => (
      <option key={animal} value={animal}>
        {animal}
      </option>
    ))}
        </select>
        </label>

        <label htmlFor="breed">
          Breeds
          <select
            id="breed"
            value={breed}
            placeholder="breed"
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e)=>setBreed(e.target.value)}
          >
        <option value=""></option>  

    {Breeds.map((breed) => (
      <option key={breed} value={breed}>
        {breed}
      </option>
    ))}
        </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
