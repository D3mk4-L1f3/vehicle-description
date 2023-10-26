import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeCircles
    height="150"
    width="150"
    color="#808080"
    wrapperStyle={{
      position: 'absolute',
      top: '50%',
      left: '50%',
    }}
    visible={true}
    ariaLabel="three-circles-rotating"
  />
);
