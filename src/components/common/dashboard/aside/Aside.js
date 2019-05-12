import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import SubmenuItem from './SubMenuItem'
import './sidebar-menu.css'
import {fetchMenuList} from '../../../../store/actions/navigationAction/navigationAction'
import logos from './../../../../asset/images/aesoraems.png'
export class Aside extends Component {

    componentDidMount() {
       
    
        let navWqappper = document.querySelector('#navWrap');
        navWqappper.addEventListener('click',function(event){
          event.target.parentElement.classList.toggle('collapse-in');
          let trid = event.target.id
          if (trid == 'header-ico') {
            let element = document.getElementsByClassName("sidebar");
          }
          let alleml = getAllSiblings(event.target.parentElement)
          let alls = alleml.filter(allsibling => allsibling !== event.target.parentElement)
          alls.map(elm => {
            elm.classList.remove('collapse-in')
          })
          // console.log(alls)
    
    
        })
        function getAllSiblings(elem, filter) {
          var sibs = [];
          elem = elem.parentNode.firstChild;
          do {
            if (elem.nodeType === 3) continue; // text node
            if (!filter || filter(elem)) sibs.push(elem);
          } while (elem = elem.nextSibling)
          return sibs;
        }
      }
    render() {
        return (
            <div>
                <div className="ems-logo">
                    <img src={logos} alt=""/>
                </div>
                <div className="sidebar-menu-wrapper" id='navWrap'>

                    {<ul className="mainmenu-item-wrapper">
                        {
                            this.props.menulist.menulist.map((items, keys, arr) => {
                                return (
                                    <SubmenuItem nam={items.name} keys={items.url} icon={items.icon} itemClass="sidebar-menu-item">
                                        <ul className="submenu-item-wrapper">
                                            {items.children ? items.children.map(child => {
                                                return <SubmenuItem itemClass="sidebar-submenu-item" icon={child.icon} keys={child.url} nam={child.name} >
                                                    <ul className="submenu-item-wrapper">
                                                        {child.children ? child.children.map(inchild => {
                                                            return <SubmenuItem itemClass="sidebar-submenu-submenu-item" icon={inchild.icon} url={inchild.url} keys={inchild.url} nam={inchild.name} >
                                                                {console.log("name", inchild.name)}
                                                            </SubmenuItem>
                                                        }) : null}
                                                    </ul>
                                                </SubmenuItem>
                                            }) : null}
                                        </ul>
                                    </SubmenuItem>
                                )
                            })
                        }
                    </ul>
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    menulist: state.menulist
    // auth: state.auth
  });


export default connect(mapStateToProps,{fetchMenuList})(withRouter(Aside))
