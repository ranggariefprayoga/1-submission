/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import { postedAt } from "../utils";

function ThreadDetail({ detailThread }) {
  return (
    <div role="button" className="thread-detail">
      <div className="thread-detail-user">
        <header>
          <h3 className="judul">{detailThread.title}</h3>
        </header>
        <article className="thread-detail-text">
          <p className="text">{parse(detailThread.body)}</p>
        </article>
        <div className="thread-detail-info">
          <img src={detailThread.owner.avatar} alt={detailThread.owner.name} />
          <p className="name">{detailThread.owner.name}</p>
          <p className="date">{postedAt(detailThread.createdAt)}</p>
        </div>
      </div>
    </div>
  );
}

export default ThreadDetail;
