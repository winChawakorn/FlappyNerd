import React from 'react'

// use bird
import bird from '../../Controller/Bird/Bird'
import birdImg from '../../images/bird.svg'
import setting from '../../Controller/Map/Setting'

class Bird extends React.Component {

  getResponsiveLeft(){
      const divider = setting.width / 100
      return (bird.x / divider) + "%"
  }

  getResponsiveTop(){
      const divider = setting.height / 100
      return (bird.y / divider) + "%"
  }

  getResponsiveWidth(){
      const divider = setting.width / 100
      return (bird.width / divider) + "%"
  }

  getResponsiveHeight(){
      const divider = setting.height / 100
      return (bird.height / divider) + "%"
  }

  render() {
    return (<div>
              <div id="bird" style={{
                position: 'absolute',
                top: `${this.getResponsiveTop()}`,
                left: `${this.getResponsiveLeft()}`,
                width: `${this.getResponsiveWidth()}` ,
                height: `${this.getResponsiveHeight()}` ,
                border: '2px solid red',
                }}>
                <img src={birdImg} alt="bird" style={{width:`100%` , height:`100%`}} />
              </div>
            </div>)
  }
}

export default Bird
