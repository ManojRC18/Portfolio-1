import React, { useState } from "react";
import Typical from "react-typical";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import imgBack from "../../../src/images/mailz.jpeg";
import load2 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const validateForm = () => {
    if (name.trim() === "") {
      setBanner("Name is required");
      toast.error("Name is required");
      return false;
    }
    if (email.trim() === "") {
      setBanner("Email is required");
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setBanner("Please enter a valid email address");
      toast.error("Please enter a valid email address");
      return false;
    }
    if (message.trim() === "") {
      setBanner("Message cannot be empty");
      toast.error("Message cannot be empty");
      return false;
    }
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setBool(true);

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_zg5ou1a", 
        "template-y80opr9",
        templateParams,
        "eD48tRYYcag_P6-RL" 
      )
      .then(
        (response) => {
          setBanner("Message sent successfully!");
          toast.success("Message sent successfully!");
          setBool(false);

          // Clear form fields
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send message:", error);
          setBanner("Failed to send message, please try again later.");
          toast.error("Failed to send message, please try again later.");
          setBool(false);
        }
      );
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="https://web.facebook.com/?_rdc=1&_rdr">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="https://www.instagram.com/instructor_ehizeex/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA">
            <i className="fa fa-youtube-square" />
          </a>
          <a href="https://twitter.com/Ehiedu_baba">
            <i className="fa fa-twitter" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load2} alt="Loading..." />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
