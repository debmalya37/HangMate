import React, { useState } from 'react';
import axios from 'axios';

const Explore = () => {
  const [feedPost, setFeedPost] = useState({
    username: 'name',
    profilePic: 'pic',
    feedPic: '',
    caption: 'caption',
    tags: '#post #tripmate',
  });

  const [uploaded, setUploaded] = useState(false);

  const handleChange = (e) => {
    setFeedPost((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFeedPost((prevState) => ({ ...prevState, feedPic: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    const postData = {
      username: feedPost.username,
      profilePic: feedPost.profilePic,
      feedPic: feedPost.feedPic,
      caption: feedPost.caption,
      tags: feedPost.tags,
    };

    // Send a POST request to your server using Axios
    axios.post('/api/upload', postData)
      .then((response) => {
        console.log('Upload successful:', response.data);
        setUploaded(true);
      })
      .catch((error) => {
        console.error('Upload failed:', error);
      });
  };

  return (
    <>
      <textarea
        id="caption"
        type="text"
        placeholder="write your experience"
        onChange={handleChange}
      />
      <br />
      <input
        id="hangout-pic"
        type="file"
        name="hangout-pic"
        className="hangout-pic"
        accept="image/*"
        onChange={handleImageChange}
      />
      <br />
      <button type="button" onClick={handleUpload}>
        Upload
      </button>

      {uploaded && (
        <div className="postFeed">
          <h1>{feedPost.username}</h1>
          <img src={feedPost.profilePic} alt="" width="50px" />
          {feedPost.feedPic && (
            <img src={feedPost.feedPic} alt="" width="300px" />
          )}
          <p>{feedPost.caption}</p>
          <span>{feedPost.tags}</span>
        </div>
      )}

      <hr />
    </>
  );
};

export default Explore;
