import { useState } from "react";
const SearchParams = () => {
  // const location ="Seattle,WA"
  const ANIMALS =["Bird","Dog","Cat","Lion","Tiger","Peacock"]
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
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
          >
              {/* <option>
                  {ANIMALS.map((animal)=>(<option key={animal} value={animal}>animal</option>))}
                  </option> */}
                  <option />
    {ANIMALS.map((animal) => (
      <option key={animal} value={animal}>
        {animal}
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
