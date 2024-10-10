import AppLayout from "../components/Layout";
import AppCard from "../components/Cards";
import React from "react";
import { useState } from "react";

// create-react-app
// class base component

// class Dashboard extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             name: "Atif"
//         }
//     }

// updateName = () => {
//     console.log(this.state);
//     this.setState(
//         {
//             name: "Moosa"
//         }
//     )
// }

//     render(){
//         return(
//             <div>
//                 <h2>{this.state.name}</h2>
//                 <button onClick={this.updateName}>Click Me</button>
//             </div>
//         )
//     }
// }


// class Dashboard extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             data: {}
//         }
//     }

//     getData() {
//         fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=> this.setState({ data: json }))
//     }

//     componentDidMount(){
//         this.getData();
//     }

//     render(){
//         console.log("state ---- ",this.state);
//         return(
//             <div>
//                 <h1>Print Data from API</h1>
//                 <h2>{this.state.data.title}</h2>
//             </div>
//         )
//     }
// }



// function base component

// function Dashboard(){
//     return(
//         <div>
//             <AppLayout title="Atif">
//                 <div>
//                     <h1>Dashboard</h1>
//                     <AppCard />
//                 </div>
//             </AppLayout>
//         </div>
//     )
// }


// Hooks State in Function base component
function Dashboard(){
    // console.log("useState", useState());

    // Destructuring 
    const [counter, setCounter] = useState(0);
    // console.log("counter ", counter);
    // console.log("setCounter ", setCounter);
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
}
export default Dashboard;