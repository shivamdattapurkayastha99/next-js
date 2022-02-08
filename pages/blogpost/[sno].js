import {useRouter} from 'next/router'
import React from 'react';

const Post = () => {
    const router=useRouter()
    const {sno}=router.query

  return <p>Post:{sno}</p>;
};

export default Post;
