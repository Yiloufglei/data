import React,{Component} from 'react'
import Header from '../../component/header'
import '../../static/css/cityAccess.scss';

export default class Access extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        return(
            <div className="page cityAccess">
                <Header url="/city" name="武汉新城智慧通行系统" />
            </div>
        )
    }
}