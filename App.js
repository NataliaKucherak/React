import React, {Component} from 'react';
import UserComponent from "./components/user/UserComponent";


class App extends Component {

    users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 21, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
    ]

    render() {
        return (
            <div>
                {
                    this.users.map((value, index) => {
                        return (<UserComponent item={value} key={index}/>);
                    })
                }

            </div>
        );
    }
}

export default App;