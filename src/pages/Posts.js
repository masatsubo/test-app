import React from 'react';

function Posts() {
  return (
    <div className="posts">
      <div className="post">
        <div className="post-header">
          <img src="farmer.jpg" alt="安曇野ファミリー農産" className="profile-image" />
          <div>
            <h3>安曇野ファミリー農産</h3>
            <p>38分前</p>
          </div>
        </div>
        <p className="post-content">夏あかり&とうもろこし収穮始まります！</p>
        <img src="corn.jpg" alt="とうもろこし" className="post-image" />
        <div className="post-actions">
          <button>いいね！</button>
          <button>コメント</button>
        </div>
      </div>
    </div>
  );
}

export default Posts;