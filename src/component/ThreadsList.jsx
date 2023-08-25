/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import ThreadItem from "./ThreadItem";
import ThreadsListContainer from "./styled/ThreadsList";

function ThreadList({ threads }) {
  return (
    <ThreadsListContainer>
      {threads.map((thread) => (
        <ThreadItem key={thread.id} thread={thread} />
      ))}
    </ThreadsListContainer>
  );
}

export default ThreadList;
