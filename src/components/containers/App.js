import React, { Component } from "react";
import LeftBar from "./LeftBar";
import Main from "./Main";
import { TweenMax, TimelineMax } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

class App extends Component {
  state = {
    controller: new ScrollMagic.Controller()
  };
  constructor(props) {
    super(props);
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
  }
  componentDidMount() {
    const updatePercentage = () => {
      tl.progress();
    };
    var tl = new TimelineMax({ onUpdate: updatePercentage }); 
    var tween1 = TweenMax.fromTo(".main", 0.2, {
      y: "25vh"
    }, {
      y:"-50vh"
    });
    tl.add(tween1);
    const scene_1 = new ScrollMagic.Scene({
      triggerElement: "body",
      triggerHook: 0,
      duration: "300px"
    })
      .setPin("body")
      .setTween(tl)
      .addIndicators()
      .addTo(this.state.controller);
    
  }
  render() {
    return (
      <div className="App d-flex ">
        <LeftBar />
        <Main />
      </div>
    );
  }
}

export default App;
