import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Section>
        <h2>Stay Updated</h2>
        <SignupForm>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </SignupForm>
      </Section>
      <Footers>
        <FooterLinks>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Support</a>
        </FooterLinks>
        <ContactInfo>
          <p>Contact us: support@gameonix.com</p>
        </ContactInfo>
      </Footers>
    </Container>
  )
}
const Container = styled.div`
background-color: black;
color: white;
`;

const Section = styled.section`
  padding: 50px 20px;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
  }
`;


const SignupForm = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  input {
    padding: 10px;
    font-size: 16px;
    width: 80vh;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: red;
    border: 2px solid white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      transform: scale(1.05);
      background-color: darkred;
    }
  }
`;

const Footers = styled.footer`
  background-color: black;
  padding: 20px;
  text-align: center;
`;

const FooterLinks = styled.div`
  a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
  }
`;

const ContactInfo = styled.div`
  margin-top: 10px;
  color: #ccc;
`;


export default Footer
