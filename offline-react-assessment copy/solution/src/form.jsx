import React, { useEffect, useState } from "react";
import { isNameValid, getLocations} from "./mock-api/apis.js";

function Form() {

    //this is a state for name, locations, saved data.
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [locations, setLocations] = useState([]);
    const [data, setData] = useState(()=>{
        //this is to get data from local storage.
        const savedData = localStorage.getItem("formData");
        return savedData ? JSON.parse(savedData) : [];
    });

    //if there are any name validation errors.
    const [nameError, setNameError] = useState("");

    //To load the locations when mounting 
    useEffect(()=>{
        const fetchLocations = async() => {
            const country = await getLocations();
            setLocations(country);
        }
        fetchLocations();
    }, []);

    //To validate the name while typing
    const handleNameChange = async(e) =>{
        const newName = e.target.value;
        setName(newName);

        if(newName.trim() === ""){
            setNameError("");
            return;
        }
        
        const duplicate = data.some((entry) => entry.name.toLowerCase().startsWith(newName.toLowerCase()));
        
        if(duplicate){
            setNameError("this name has already been taken");
            return;
        }else{
            setNameError("");
        }

        //Only is its not duplicate we call the api to check further
            const valid = await isNameValid(newName);
            if(!valid){
                setNameError("this name has already been taken");
            } else {
                setNameError("");
            }
        
    };

    //Add Button - Store name and locations to the local storage and the table.
    const handleAdd = (e) =>{
        e.preventDefault();

       
        if(nameError){
            return;
        }   
        

        //to add entries to local storage
        const newData = [...data, {name, location}];
        setData(newData);
        localStorage.setItem("formData", JSON.stringify(newData));

        //clearing the fields
        setName("");
        setLocation("");
    }

    //Clear button - clear all the data and clear local storage as well.
    const handleClear = () => {
        setName("");
        setLocation("");
        setData([]);
        localStorage.removeItem("formData");
    }

  return (
    <div className="main">
      <div className="name">
        Name 
        <input 
        type="text" 
        value={name}
        onChange={handleNameChange}
        placeholder="Name" 
        />
        {nameError && <span className="name-error">{nameError}</span>}
      </div>
      <div className="country">
      Location
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">Select Country</option>
            {locations.map((country, index)=>(
                <option key={index} value={country}>{country}</option>
            ))}
        </select>
      </div>
      <div className="buttons">
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
        <button 
        className="add" 
        onClick={handleAdd}
        disabled={nameError}>{/*Disable the button if there is a name error*/}
          Add
        </button>
      </div>
      <div className="table-div">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
                {data.length === 0 ? (
                    <tr>
                        <td colSpan="1"> No data available</td>
                        <td></td>
                    </tr>
                ) : (
                    data.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.location}</td>
                        </tr>
                    ))
                )}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
