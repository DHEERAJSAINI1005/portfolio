import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>📞 Contact Me</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:dheeraj@dheerajkumar.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:dheeraj@dheerajkumar.com">dheeraj@dheerajkumar.com</a>
        </div>
        <div>
        <a href="tel:+918607095982"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918607095982">(+91) 8607095982</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}