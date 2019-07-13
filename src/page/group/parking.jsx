import React, { Component } from 'react'
import Header from '../../component/header'
import '../../static/css/groupParking.scss';

class Parking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return ( 
            <div className="page groupParking">
                <Header url="/group" name="集团智慧停车大数据平台" />
            </div>
        )
    }
}

export default Parking;