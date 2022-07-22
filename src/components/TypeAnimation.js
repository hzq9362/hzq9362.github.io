import TypeAnimation from 'react-type-animation';
import './TypeAnimation.css';
export const Typeanimation = () => {
  return (
    <TypeAnimation
      cursor={false}
      sequence={['I love geo', 1000, 'I love hiking', 1000, 'I love guitar', 1000, 'I love Hongye', 1000]}
      wrapper="h2"
      repeat={Infinity}
      className = "animation"
    />
  );
};