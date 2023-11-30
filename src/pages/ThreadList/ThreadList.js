import React, { useState, useEffect } from "react";
import "./ThreadList.scss";
import Button from "../../components/Button/Button";

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("http://10.58.52.135:8000/threadlist", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setThreads(data.data));
  }, []);
  console.log(threads);

  const timeAgo = (dateString) => {
    const diffInSeconds = Math.floor(
      (new Date() - new Date(dateString)) / 1000
    );
    const timeInterval = [
      [604800, "주"],
      [86400, "일"],
      [3600, "시간"],
      [60, "분"],
      [1, "초"],
    ].find(([seconds]) => diffInSeconds >= seconds);

    return `${Math.floor(diffInSeconds / timeInterval[0])}${
      timeInterval[1]
    } 전`;
  };

  return (
    <>
      <div className="postList">
        <div className="container">
          <div className="threadList">
            {threads.map((thread) => (
              <div className="post">
                <div className="writerDesktop">
                  <div className="name">
                    <div className="profileThumb">
                      <img
                        className="pic"
                        alt="basic_pic"
                        src="images/Logo.png"
                      />
                      <div className="profilePicLine"></div>
                    </div>
                    <span className="userName">{thread.nickname}</span>
                  </div>
                  <div className="function">
                    <span className="dateTime">
                      {timeAgo(thread.createdAt)}
                    </span>
                  </div>
                </div>
                <span className="threadContent">{thread.content}</span>
                <div className="actionAndInfo">
                  <div className="commentInfo">
                    <span className="commentCount">
                      댓글 {thread.commentCount}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="action">
              <Button className="smallButton">글쓰기</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreadList;
