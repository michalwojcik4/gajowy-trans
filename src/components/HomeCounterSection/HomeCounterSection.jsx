import AnimatedNumber from './AnimatedNumber/AnimatedNumber';

import { Counter, NumberBox, Text } from './HomeCounterSection.styled';

const HomeCounterSection = () => {
  return (
    <Counter>
      <NumberBox>
        <AnimatedNumber targetNumber={12} />
        <Text>Specjalistów</Text>
      </NumberBox>
      <NumberBox>
        <AnimatedNumber targetNumber={8} />
        <Text>Lat doświadczenia</Text>
      </NumberBox>
      <NumberBox>
        <AnimatedNumber targetNumber={220} />
        <Text>Zadowolonych klientów</Text>
      </NumberBox>
      <NumberBox>
        <AnimatedNumber targetNumber={5} />
        <Text>Zdobytych nagród</Text>
      </NumberBox>
    </Counter>
  );
};

export default HomeCounterSection;
