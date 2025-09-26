// src/components/Sidebar.jsx
import React from "react";

export default function Sidebar({ relatedPosts }) {
  return (
    <div className="sidebar maxw-360">
      {/* Search */}
      <div className="sidebar-item sidebar-search mb-4">
        <form className="form-search">
          <fieldset className="text">
            <input
              type="text"
              placeholder="Search..."
              name="search"
              required
            />
          </fieldset>
          <button type="submit">
            <i className="icon-search"></i>
          </button>
        </form>
      </div>

      {/* Related Posts */}
      <div className="sidebar-item sidebar-relatest-post">
        <h5 className="sidebar-heading">Related Posts</h5>
        <div>
          {relatedPosts.map((post) => (
            <div key={post.id} className="relatest-post-item style-row hover-image">
              <div className="image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="content">
                <div className="meta d-flex gap-3">
                  <p className="text-caption-1">{post.date}</p>
                  <p className="text-caption-1">
                    by <a className="link" href="#">{post.author}</a>
                  </p>
                </div>
                <div className="title text-title">
                  <a className="link" href={`/blog/${post.id}`}>
                    {post.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
