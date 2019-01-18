import React, { Component } from 'react';


class Info extends Component {
    state = { 
        inf:""
     }
    componentWillMount(){
        console.log(this.props.location.query.info)
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.location.query.info}&type=accurate&APPID=b841bb13383af930482e94910d4d1451`)
      .then(response => response.json())
      .then(a => this.setState({ inf: a }));
    }
    render() { 
        console.log(this.state)
        return ( 
            <div>Hello</div>
         );
    }
}
 
export default Info;