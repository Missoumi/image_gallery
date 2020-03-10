import React from "react";
import AboutUsDiv from "../styled_component/AboutUsDiv";
import SmallP from "../styled_component/smallP";
import facebook_icon from "../../assets/icons/facebook.png";
import instagram_icon from "../../assets/icons/instagram.png";
import twitter_icon from "../../assets/icons/twitter.png";

const AboutUs = () => {
  return (
    <AboutUsDiv className="col-6 p-5">
      <h5>About Us</h5>
      <SmallP>
        Mus sed interdum nunc dictum rutrum scelerisque erat a parturient
        condimentum potenti dapibus vestibulum condimentum per tristique porta.
        Torquent a ut consectetur a vel ullamcorper a commodo a mattis ipsum
        class quam sed eros vestibulum quisque a eu nulla scelerisque a
        elementum vestibulum.
      </SmallP>
      <SmallP>
        Aliquet dolor ultricies sem rhoncus dolor ullamcorper pharetra dis
        condimentum ullamcorper rutrum vehicula id nisi vel aptent orci litora
        hendrerit penatibus erat ad sit. In a semper velit eleifend a viverra
        adipiscing a phasellus urna praesent parturient integer ultrices montes
        parturient suscipit posuere quis aenean. Parturient euismod ultricies
        commodo arcu elementum suspendisse id dictumst at ut vestibulum conubia
        quisque a himenaeos dictum proin dis purus integer mollis parturient
        eros scelerisque dis libero parturient magnis.
      </SmallP>
      <h5>Follow Me</h5>
      <div className="mt-4">
        <a href="/" className="mr-3">
          <img src={twitter_icon} alt="twitter" />
        </a>
        <a href="/" className="mr-3">
          <img src={facebook_icon} alt="facebook" />
        </a>
        <a href="/" className="mr-3">
          <img src={instagram_icon} alt="instagram" />
        </a>
      </div>
    </AboutUsDiv>
  );
};

export default AboutUs;
