import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            /*<div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Welcome to Megablog! Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>*/
            <div className="w-full bg-gray-100 py-12 mt-6 text-center border-t border-gray-300">
  <Container>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
        Welcome to <span className="text-blue-600">Megablog</span>!
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Join our community to create amazing posts.{" "}
        <span className="font-semibold">Login to read posts</span>
      </p>
      {/*<div className="flex gap-4">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-2 rounded-full bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
        >
          Signup
        </button>
      </div>*/}
    </div>
  </Container>
</div>

        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home 
