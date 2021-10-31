import React, {Component} from "react
class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName : "",
            lastName : "",
            age : "",
            gender : "",
            dest : "",
            veg : "",
            kosher : "",
            lactose : ""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {type,name,value,checked} = event.target
        type==='checkbox'? 
        this.setState({[name]:checked}) : 
        this.setState({[name] : value})
    }
    
    render() {
        return (
            <main>
            <h1>Travel Form</h1><br/>
                <form>
                    <input 
                    name="firstName" 
                    type="text" 
                    value={this.state.firstName} 
                    onChange={this.handleChange} 
                    placeholder="First Name" /><br />
                    <input 
                    name="lastName" 
                    type="text" 
                    value={this.state.lastName} 
                    onChange={this.handleChange} 
                    placeholder="Last Name" /><br />
                    <input 
                    name="age" 
                    type="number" 
                    value={this.state.age} 
                    onChange={this.handleChange} 
                    placeholder="Age" /><br />
                    <br /><label>Choose Gender : </label><br />
                     <label>  <input 
                    name="gender" 
                    type="radio" 
                    value="male"
                    checked={this.state.gender == "male"} 
                    onChange={this.handleChange} 
                     /> male </label><br />
                  
                     <label>  <input 
                    name="gender" 
                    type="radio" 
                    value="female"
                    checked={this.state.gender == "female"}
                    onChange={this.handleChange} 
                     /> female </label><br />
                    
                   <br/> <label>Destination:</label>
                <select 
                    value={this.state.dest}
                    onChange={this.handleChange}
                    name="dest"
                >   
                    <option value="">-- Please Choose a Destination --</option> 
                    <option value="INDIA">INDIA</option>
                    <option value="UAE">USA</option>
                    <option value="KSA">KSA</option>
                </select>
                    <br />
                    
               <br /> <label>Dietary restrictions : <br/>
                    <input 
                        type="checkbox" 
                        name="veg"
                        checked={this.state.veg}
                        onChange={this.handleChange}
                    />Vegan </label>
                   <label> <input 
                        type="checkbox" 
                        name="kosher"
                        checked={this.state.kosher}
                        onChange={this.handleChange}
                    />Kosher </label>
                   <label> <input 
                        type="checkbox" 
                        name="lactose"
                        checked={this.state.lactose}
                        onChange={this.handleChange}
                    />Lactose free
                </label>
                    <br /><br/>
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.dest}</p>
                <p>
                    Your dietary restrictions: <br/>
                    Vegan - {this.state.veg? 'YES' : 'NO'}<br/>
                    Kosher - {this.state.kosher? 'YES' : 'NO'}<br/>
                    Lactose free - {this.state.lactose? 'YES' : 'NO'}<br/>
                    
                </p>
            </main>
        )
    }
}

export default App
