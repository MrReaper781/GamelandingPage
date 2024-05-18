import styled from "styled-components";

const Home = () => {
  return (
    <Container id="home">
      <HeroSection>
        <h1>GAMEONIX</h1>
        <Tagline>Embark on an Epic Adventure</Tagline>
        <Button>
          <button>Get Started</button>
          <button>Watch Trailer</button>
        </Button>
      </HeroSection>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  color: white;
`;

const HeroSection = styled.div`
  height: 90vh;
  text-align: center;
  background-image: url('/src/assets/bimg3.jpg');
  background-size: cover;
  background-position: center;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
    }
  }
`;

const Tagline = styled.div`
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

const Button = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  button {
    background-color: red;
    color: white;
    border: 2px solid white;
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: darkred;
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;

    button {
      width: 80%;
      font-size: 14px;
      padding: 8px 16px;
    }
  }
`;

export default Home;
