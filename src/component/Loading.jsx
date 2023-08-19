/* eslint-disable react/react-in-jsx-scope */
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="loading">
      <LoadingBar style={{ backgroundColor: 'blue', height: '5px', zIndex: 999999 }} />
    </div>
  );
}

export default Loading;
