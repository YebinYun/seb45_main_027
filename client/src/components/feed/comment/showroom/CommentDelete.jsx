import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../../../common/tokens";

const CommentDelete = ({
  comment,
  replies,
  setReplies,
  setFeedData,
  feedData,
}) => {
  const { feedId } = useParams(); // 게시물 번호

  // DELETE 요청
  const deleteComment = async (feedReplyId) => {
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
        setReplies((prevReplies) =>
          prevReplies.filter((reply) => reply.feedReplyId !== feedReplyId)
        );

        setFeedData((prevFeedData) => ({
          ...prevFeedData,
          replies: prevFeedData.replies.filter(
            (reply) => reply.feedReplyId !== feedReplyId
          ),
        }));

        toast.success("댓글이 삭제되었습니다.");
      }
    } catch (err) {
      console.error("err comment:", err);
      toast.error("댓글을 삭제할 수 없습니다.");
    }
  };

  return (
    <div>
      <button
        className="mx-2 hover:font-semibold"
        onClick={() => {
          deleteComment(comment.feedReplyId);
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default CommentDelete;
