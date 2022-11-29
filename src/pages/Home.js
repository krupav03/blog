import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { DeleteOutlined } from "@ant-design/icons";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  return (
    <>
      <div className="homePage">
        {postLists.map((post) => {
          return (
            <>
              <div className="post">
                <div className="postHeader">
                  <div className="title">
                    <h1> {post.title}</h1>
                  </div>
                  <div className="deletePost">
                    {isAuth && post.author.id === auth.currentUser.uid && (
                      <button
                        onClick={() => {
                          deletePost(post.id);
                        }}
                      >
                        <DeleteOutlined />
                      </button>
                    )}
                  </div>
                </div>
                <div className="postTextContainer"> {post.postText} </div>
                <div className="iconAlign">
                  <div>
                    <h3>- by {post.author.name}</h3>
                  </div>
                  <div>
                    <WhatsappShareButton
                      title="sharing Content"
                      url="localhost:3000"
                    >
                      <WhatsappIcon
                        logoFillColor="white"
                        round={true}
                        style={{ height: "50" }}
                      ></WhatsappIcon>
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Home;
