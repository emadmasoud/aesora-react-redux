import React from 'react';

import {Link} from 'react-router-dom'


const SubMenuItem = props => {
    return (
        <li key={props.keys} className={props.itemClass} style={{color:"blue"}}>
           <Link  to={props.url} ><i className={props.icon}></i>{props.nam}</Link>{props.children}
           {/* <span  to={props.url} ><i className={"fas "+ props.icon}></i>{props.nam}</span>{props.children}      */}
        </li>
        
    )
}

export default SubMenuItem;