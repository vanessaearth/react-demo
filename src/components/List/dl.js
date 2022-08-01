import './dl.css';

import React, {Component, Fragment} from 'react'
class D1 extends Component {
  constructor(props) {
    super(props);
  }
  state={isOpen:false}

  render() { 
    let {isOpen} =this.state
    let {dlData,name,openName,changeOpen} =this.props
    let style={background:'#ccc'}
    return (  
      <Fragment>
      
      <dl className={"dl "+(isOpen?'expend':'')} >
        <dt  style={style} onClick={()=>{
          changeOpen(openName===name?'':name)
          this.setState({isOpen:!isOpen})
        }}>{dlData.title}</dt>
        {
          dlData.list.map((v,i)=>{
            return  <dd key={i}>{v.name}</dd>
          })
        }
      
      </dl>
      </Fragment>
    );
  }
}
 
export default D1;