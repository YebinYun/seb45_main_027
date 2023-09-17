import React from 'react';
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../../common/tokens";

const ReplyDelete = ({ comment, replies, setReplies }) => {
  const { feedId } = useParams(); // 게시물 번호

  // DELETE 요청
  const deleteReply = async (feedReplyId) => {
    const configParams = {
      method: "DELETE",
      url: `/feed/${feedId}/feedReply/${feedReplyId}`,
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    };

    try {
      const res = await api(configParams);
      if (res && res.status === 200) {
        setReplies((prev) => {
          if (Array.isArray(prev)) {
            return prev.filter((reply) => reply.feedReplyId !== feedReplyId);
          }
        });
      }
    } catch (err) {
      console.error("err comment:", err);
      toast.error("답글을 삭제할 수 없습니다.");
    }
  };

  return (
    <div>
      <button
        className="mx-1"
        onClick={() => {
          deleteReply(comment.feedReplyId);
        }}>
        삭제하기
      </button>
    </div>
  );
};

export default ReplyDelete;