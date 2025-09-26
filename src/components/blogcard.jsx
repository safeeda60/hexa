// src/components/BlogCard.jsx
import React from "react";

export default function BlogCard({ post }) {
  return (
    <div className="wg-blog hover-image mb_40">
      <div className="image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="content">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-10">
          <div className="meta d-flex gap-3">
            <div className="meta-item d-flex align-items-center gap-2">
              <i className="icon-calendar"></i>
              <p>{post.date}</p>
            </div>
            <div className="meta-item d-flex align-items-center gap-2">
              <i className="icon-user"></i>
              <p>
                by <a className="link" href="#">{post.author}</a>
              </p>
            </div>
          </div>
          <div className="meta d-flex gap-3">
            <div className="meta-item d-flex align-items-center gap-2">
              <i className="icon-comment"></i>
              <p>{post.comments}</p>
            </div>
            <div className="meta-item d-flex align-items-center gap-2">
              <i className="icon-eye"></i>
              <p>{post.views}</p>
            </div>
          </div>
        </div>
        <h4 className="title fw-5 mt-2">
          <a className="link" href={`/blog/${post.id}`}>
            {post.title}
          </a>
        </h4>
        <div className="body-text-1">{post.excerpt}</div>
      </div>
    </div>
  );
}
