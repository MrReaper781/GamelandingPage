import styled from "styled-components";

const Contact = () => {
  return (
    <Container id="contact">
      <Contacts>
        <h1>CONTACT US</h1>
        <Form>
          <form>
            <Input type="text" placeholder="Epic Gaming Identity" required />
            <Input type="email" placeholder="Player Email" required />
            <Textarea placeholder="Advance the Adventure....." name="" required />
            <button type='submit'>Go Ahead</button>
          </form>
        </Form>
      </Contacts>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  color: white;
  background: linear-gradient(to bottom, black, #141e30, black);
`;

const Contacts = styled.div`
  padding: 50px 20px;
  text-align: center;

  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 40px;
  }
`;

const Form = styled.div`
  display: flex;
  justify-content: center;

  form {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  form button{
    width: 25vh;
    background-color: red;
    color: white;
    border: 2px solid white;
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      background-color: darkred;
      transform: scale(1.05);
    }
  }
`;

const Input = styled.input`
  padding: 15px;
  border: 2px solid #444;
  border-radius: 5px;
  background-color: #222;
  color: white;
  font-size: 16px;
  width: 70vh;

  ::placeholder {
    color: #888;
  }
`;

const Textarea = styled.textarea`
  padding: 15px;
  border: 2px solid #444;
  border-radius: 5px;
  background-color: #222;
  color: white;
  font-size: 16px;
  width: 70vh;

  ::placeholder {
    color: #888;
  }
`;

export default Contact;
