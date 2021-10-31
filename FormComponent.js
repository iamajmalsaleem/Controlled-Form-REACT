import React from "react"

function FormComponent(props) {
    return (
        <main>
            <h1>Travel Form</h1><br/>
            <form>
                <input 
                    name="firstName" 
                    value={props.data.firstName} 
                    onChange={props.handleChange} 
                    placeholder="First Name" 
                />
                <br />
                
                <input 
                    name="lastName" 
                    value={props.data.lastName}
                    onChange={props.handleChange} 
                    placeholder="Last Name" 
                />
                <br />
                
                <input 
                    name="age" 
                    value={props.data.age}
                    onChange={props.handleChange} 
                    placeholder="Age" 
                />
                <br />
                      
                <br /><label>Choose Gender : </label><br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={props.data.gender == "male"}
                        onChange={props.handleChange}
                    /> Male
                </label>
                
                <br />
                
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={props.data.gender == "female"}
                        onChange={props.handleChange}
                    /> Female
                </label>
                
                <br /><br />
                
                <select 
                    value={props.data.dest} 
                    name="dest" 
                    onChange={props.handleChange}
                >
                    <option value="">-- Please Choose a Destination --</option>
                    <option value="INDIA">INDIA</option>
                    <option value="USA">USA</option>
                    <option value="KSA">KSA</option>
                </select>
    
                <br /> <br />
                <label>Dietary restrictions : <br/>
                    <input 
                        type="checkbox" 
                        name="veg"
                        checked={props.data.veg}
                        onChange={props.handleChange}
                    />Vegan </label>
                <label> <input 
                        type="checkbox" 
                        name="kosher"
                        checked={props.data.kosher}
                        onChange={props.handleChange}
                    />Kosher </label>
                <label> <input 
                        type="checkbox" 
                        name="lactose"
                        checked={props.data.lactose}
                        onChange={props.handleChange}
                    />Lactose free
                </label>
                <br /><br/>
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your dest: {props.data.dest}</p>
            <p>
                    Your dietary restrictions: <br/>
                    Vegan - {props.data.veg? 'YES' : 'NO'}<br/>
                    Kosher - {props.data.kosher? 'YES' : 'NO'}<br/>
                    Lactose free - {props.data.lactose? 'YES' : 'NO'}<br/>
            </p>
            
        </main>
    )
}

export default FormComponent
