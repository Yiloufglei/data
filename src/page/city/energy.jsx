import React,{Component} from 'react'
import Header from '../../component/header'
import '../../static/css/cityEnergy.scss';
export default class Energy extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        return(
            <div className="page cityEnergy">
                <Header url="/city" name="武汉新城智慧能源系统" />
            </div>
        )
    }
}