import React, { Component } from 'react'
import Header from '../../component/header'
import '../../static/css/group.scss';

class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
 
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    render() {
        console.log('groupPage');
        return ( 
            <div className="page groupPage">
                <Header  city="中国" name="易达智云驾驶舱大数据平台" />
                <div className="dataList">
                    <div className="list">
                        <div className="con">
                            8,700,000.00
                            <div className="name">
                                业务总收入(元)
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="con">
                            6,130,246 / 317
                            <div className="name">
                                设备接入总数/离线数(个)
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="con">
                            3,100 / 540
                            <div className="name">
                                企业用户数/当日活跃用户数（个）
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="con">
                            69,400 / 3,520
                            <div className="name">
                                累计用户数/当日活跃用户数（个）
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="con">
                            20,150 / 45
                            <div className="name">
                                工单处理数/未处理数（次）
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel">
 
                </div>
            </div>
        )
    }
}

export default Group;