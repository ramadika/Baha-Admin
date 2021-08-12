import React, { Component } from 'react';
import { GoPrimitiveDot } from 'react-icons/go'
export const DataContext = React.createContext();
export const Provider = DataContext.Provider;

export class DataProvider extends Component {
    
    state = {
        result: [],
        total: 0
        
    };

    fetchData = () => {
        fetch('http://localhost/BE-Baha/view_order.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        result: data.result
                    })
                }
                else {
                    console.log(data.message);
                }
            }.bind(this));
        })
        .catch(error => {
            console.log(error);
        });
    }

    fetchStatus = (status) => {
        let icstatus;
        if(status === "Waiting for payment"){
            icstatus = (
                <GoPrimitiveDot color={'yellow'}></GoPrimitiveDot>
            )
        }else if (status === "Payment Successfully"){
            icstatus = (
                <GoPrimitiveDot color={'green'}></GoPrimitiveDot>
            )
        }else if (status === "Canceled"){
            icstatus = (
                <GoPrimitiveDot color={'red'}></GoPrimitiveDot>
            )
        }
        return icstatus;
    }

    componentDidMount() {
        this.fetchData();
        setInterval(this.fetchData, 1000);
    }

    render() {
        const contextValue = {
            result: this.state.result,
            total: this.state.total,
            fetchStatus: this.fetchStatus,
        }

        return (
            <DataContext.Provider value={contextValue}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
