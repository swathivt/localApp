import React from 'react';
import axios from 'axios';

export class Home1 extends React.Component{

    state = {
        persons: []
      }
    
    // render() {
    //     return (
    //            <>
    //            <h3>Restaurants Listing</h3> 
    //            </>
    //     )
    // }

    render() {
        return (
          <ul>
            {
              this.state.persons
                .map(person =>
                  <li key={person.id}>{person.name}</li>
                )
            }
          </ul>
        )
      }

        componentDidMount() {
            axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
              const persons = res.data;
              this.setState({ persons });
             console.log("The results");
            })

        //     axios.formToJSON
        // axios.get('http://localhost:5000/')
        //     .then(response => {
        //        // this.setState({ todos: response.data });
        //        console.log('succccesssss')
        //     })
        //     .catch(function (error){
        //         console.log('ooopppppppssssss')
        //         console.log(error);
        //     })
    }

}



// export function Header() {


   
    // return (
        
    //         axios.get('http://localhost:5000', {headers : {'content-type' : 'application/json'}})
    //         .then(res => console.log(res)) 
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //           }),
    
      
               
    
    
    


