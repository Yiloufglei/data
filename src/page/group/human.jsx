import React, { Component } from 'react'
import Header from '../../component/header'
import '../../static/css/groupHuman.scss';

class Human extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return ( 
            <div className="page groupHuman">
                <Header url="group" name="集团智慧通行大数据平台" />

            </div>
        )
    }
}

export default Human;