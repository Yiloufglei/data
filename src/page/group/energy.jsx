import React, { Component } from 'react'
import Header from '../../component/header'
import '../../static/css/groupEnergy.scss';

class Energy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return ( 
            <div className="page groupEnergy">
                <Header url="/group" name="集团智慧能源大数据平台" />
            </div>
        )
    }
}

export default Energy;