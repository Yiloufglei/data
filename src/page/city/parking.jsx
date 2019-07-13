import React,{Component} from 'react'
import Header from '../../component/header'
import '../../static/css/cityParking.scss';
export default class Parking extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        return(
            <div className="page cityParking">
                <Header url="/city" name="武汉新城智慧停车系统" />
            </div>
        )
    }
}