/* eslint-disable react/react-in-jsx-scope */
import LoadingBar from 'react-redux-loading-bar';
import LoadingContainer from './styled/Loading';

function Loading() {
  return (
    <LoadingContainer>
      <LoadingBar style={{ backgroundColor: 'blue', height: '5px', zIndex: 999999 }} />
    </LoadingContainer>
  );
}

export default Loading;
