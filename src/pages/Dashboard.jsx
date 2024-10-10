import AppLayout from "../components/Layout";
import AppCard from "../components/Cards";
import React from "react";

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


class Dashboard extends React.Component{
    constructor(){
        super()
    }

    getData() {
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }

    render(){
        this.getData();
        return(
            <div>
            </div>
        )
    }
}



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
export default Dashboard;