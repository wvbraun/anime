
//import './aframe-extras.js';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react';

const weiss = '#4CC3D9';
const maddy = '#E3D8f4';

class Chibi extends Component {
  constructor(props) {
    super(props);
    this.state = {color: maddy};
  }

  changeColor = () => {
    const colors = [maddy, weiss, 'red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {

    /*
      <Entity
            position='0 1 -2.5'
            rotation='0 0 0'
            collada-model='src: url(anim/chibi/female_standing_pose.dae);'
          />


    <Entity
            primitive='a-box'
            position='0 2 -3'
            rotation='0 30 0'
            color={weiss}
          />

          gltf-model-next='src: url(anim/jazz_dancing.gltf);'


<Entity
            position='0 2 -2'
            animation-mixer="clip: *"
            gltf-model-next="src: url(https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AnimatedMorphSphere/glTF/AnimatedMorphSphere.gltf);"
          />


          <Entity id="box"
            geometry={{primitive: 'box'}}
            material={{color: this.state.color, opacity: 1.0}}
            position={{x: 0, y: 2, z: -3}}
            events={{click: this.changeColor}}>
            <a-animation attribute="rotation"
               dur="5000"
               ease="ease-cubic"
               fill="forwards"
               to="360 360 0"
               repeat="indefinite"></a-animation>
          </Entity>

    */
//            animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
    return (
      <div>
        <Scene>
          <a-assets>
          </a-assets>

          <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>


          <Entity
            rotation='0 -90 0'
            position='0 2 -3'
            scale='0.15 0.15 0.15'
            animation-mixer="clip: *; loop: pingpong"
            json-model="src: url(assets/anim/female_standing_pose/female_standing_pose.json);"
          />

          <Entity
            position='-2 1 -2'
            rotation="0 -90 0"
            animation-mixer="clip: *"
            gltf-model-next="src: url(https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/CesiumMan/glTF/CesiumMan.gltf);"
          />

          <Entity
            position='2 1 -2'
            rotation="0 -90 0"
            animation-mixer="clip: *"
            gltf-model-next="src: url(https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/CesiumMan/glTF/CesiumMan.gltf);"
          />

          <Entity primitive='a-camera' position='0 0 5' />
          <Entity primitive='a-sky' color='#ECECEC' />
        </Scene>
      </div>
    )
  }

}

export default Chibi;
