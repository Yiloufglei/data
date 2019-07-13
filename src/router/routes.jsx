import React from 'react';
import Loadable from 'react-loadable';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Loading from '../component/loading';
import NoMatch from '../component/404';

const group = Loadable({loader: () => import("../page/group/group"),loading: Loading});//集团桌面
const groupSecurity = Loadable({loader: () => import("../page/group/security"),loading: Loading});//集团安防
const groupParking = Loadable({loader: () => import("../page/group/parking"),loading: Loading});//集团停车
const groupHuman = Loadable({loader: () => import("../page/group/human"),loading: Loading});//集团人行
const groupEnergy = Loadable({loader: () => import("../page/group/energy"),loading: Loading});//集团能源

const city = Loadable({loader: () => import("../page/city/city"),loading: Loading});//城市项目桌面
const citySecurity = Loadable({loader: () => import("../page/city/security"),loading: Loading});//城市安防
const cityParking = Loadable({loader: () => import("../page/city/parking"),loading: Loading});//城市停车
const cityAccess = Loadable({loader: () => import("../page/city/access"),loading: Loading});//城市门禁
const cityEnergy = Loadable({loader: () => import("../page/city/energy"),loading: Loading});//城市能源
const cityPatroly = Loadable({loader: () => import("../page/city/patroly"),loading: Loading});//城市巡更

let routeList = [
    {path: '/group',component: group},
    {path: '/groupSecurity',component: groupSecurity},
    {path: '/groupParking',component: groupParking},
    {path: '/groupHuman',component: groupHuman},
    {path: '/groupEnergy',component: groupEnergy},
    {path: '/city',component: city},
    {path: '/citySecurity',component: citySecurity},
    {path: '/cityParking',component: cityParking},
    {path: '/cityAccess',component: cityAccess},
    {path: '/cityEnergy',component: cityEnergy},
    {path: '/cityPatroly',component: cityPatroly},
]

export default class routes extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <div className="routes">
                    <Switch>
                        {
                            routeList.map(item=>{
                                return <Route key={item.path} path={item.path} component={item.component} exact={item.exact} />
                            })
                        }
                        <Route component={NoMatch}/>
                    </Switch>
                    <Route exact path="/" render={() => <Redirect to="/group" />} />      
                </div>
            </BrowserRouter>
        )
    }
}
