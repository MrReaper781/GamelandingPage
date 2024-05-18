import styled from "styled-components";

const Features = () => {
  return (
    <Container id="features">
      <h1>FEATURES</h1>
      <Section>
        <Feature>
          <Text>
            <p>Epic storylines intertwine with immersive tasks and quests, guiding players through a captivating journey of discovery and adventure.</p>
          </Text>
          <Image src="/src/assets/39928213.jpg" alt="Epic Storyline" />
        </Feature>
        <Feature>
          <Image src="/src/assets/multiplayer.jpg" alt="Multiplayer Thrill" />
          <Text>
            <p>Experience the thrill of multiplayer gaming, where strategy, teamwork, and competition bring unparalleled excitement and endless replayability.</p>
          </Text>
        </Feature>
        <Feature>
          <Text>
            <p>Arm yourself with an arsenal of powerful weapons, each offering unique abilities and tactical advantages for every combat scenario.</p>
          </Text>
          <Image src="/src/assets/weapons1.jpg" alt="Arsenal of Weapons" />
        </Feature>
        <Feature>
          <Image src="/src/assets/powers.jpg" alt="Extraordinary Powers" />
          <Text>
            <p>Unleash extraordinary powers and abilities, turning the tide of battle with devastating effects and strategic mastery.</p>
          </Text>
        </Feature>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
  /* background: linear-gradient(to bottom, #000000, #141e30, #000000); */
  background-image: url('/src/assets/bimg11.jpg');
  padding: 20px;
  box-sizing: border-box;

  h1 {
    text-align: center;
    font-weight: 700;
    padding: 30px 0;
    margin-bottom: 40px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 80px;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #444;
  border-radius: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

const Text = styled.div`
  flex: 1;

  p {
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 22px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(0, 0, 0, 0.19);
  border-radius: 10px;
`;

export default Features;
