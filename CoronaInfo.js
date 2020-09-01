import React from 'react'
class CoronaInfo extends React.Component{
    constructor(props){
        super(props);
    
    this.state={
        data:[]
    }
}
    componentDidMount(){
         fetch('https://api.covidindiatracker.com/state_data.json') 
        .then((a)=>a.json()) // convert into json , this is promise concept go through it
        .then((b)=>this.setState({data:b})) // then convert into data
        
    }
    render(){
       
        return(
            <div>
                {console.log('corona info')}
            <table className="table table-bordered">
          
                <thead>
                <tr>
                  <th>State</th>
                  <th>Active</th>
                  <th>Confirmed</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                  
                </tr>
              </thead>
               <tbody>
               {
                this.state.data.map((n,i)=>
                <tr key={i}>
                    
                    <td>{n.state}</td>
                    <td>{n.active}</td>
                    <td>{n.confirmed}</td>
                    <td>{n.recovered}</td>
                    <td>{n.deaths}</td>
                </tr>)
                
            }
            </tbody>
            </table>
            </div>
        );
    }

}
export default CoronaInfo;