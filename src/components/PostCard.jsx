import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard
/*

import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      {post.featuredImage && (
        <img
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
      )}

      <h2 className="text-xl font-bold mb-2">{post.title}</h2>

      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
        {post.content}
      </p>

      <Link
        to={`/post/${post.$id}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Read More
      </Link>
    </div>
  );
}
*/
/*
import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  if (!post) {
    return null; // nothing to render if post is undefined
  }

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      {post.featuredImage ? (
        <img
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title || "Post image"}
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg mb-3 text-gray-500">
          No Image
        </div>
      )}

      <h2 className="text-xl font-bold mb-2">{post.title || "Untitled Post"}</h2>

      {post.content && (
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {post.content}
        </p>
      )}

      <Link
        to={`/post/${post.$id}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Read More
      </Link>
    </div>
  );
}*/

