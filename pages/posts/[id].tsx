import React from 'react'
import { useRouter } from 'next/router'
import { Root, Post } from '../index';
import { useSelector } from 'react-redux';
import { BlogState, State } from '../../redux/reducers/blogReducer';


const SinglePost:React.FC = () => {
    const router = useRouter()
    const {posts} = useSelector<State, State>(state => state)
    const { id } = router.query
    const singlePost = posts.filter(instance => instance.id === Number(id))[0]
     

    const output = [
        <Post 
            key={singlePost.id} 
            color="#eefa72" 
            content={singlePost.body} 
            title={singlePost.title} 
            id={singlePost.id} 
            noView={true}
        />
    ]
    return (      
        <Root>
            {output}
        </Root>
    )
}

export default SinglePost