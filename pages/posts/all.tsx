import React from 'react'
import { GetServerSideProps } from 'next';
import { Root, Post } from '../index';
import axios from 'axios';
import { ReactReduxContext } from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import { wrapper } from '../../store';
import { State } from '../../redux/reducers/blogReducer';

type axisContent = {
    title: string;
    content: string;
}

type axiosData = {
    data: Array<axisContent>;
}

interface dataProp {
    data: {
        title: string;
        body: string;
    }[];
}

const CreatePost:React.FC<dataProp> = () => {
    const dispatch = useDispatch()
    
    const { posts } = useSelector<State, State>(state => state);

    React.useEffect(() => {
        dispatch({type: "SHOW_POST"})
    }, [posts, dispatch])
    
    const body = posts.map((value, index) => {
        return (
            <Post key={index} color="#eefa72" content={value.body} title={value.title} />
        )
    });
    
    return (
        <Root>
            {body}
        </Root>
    )
}




// export const getStaticProps = wrapper.getStaticProps((store) => async ({ }) => {
//     const ress = await axios.get("https://simple-blog-api.crew.red/posts/")
//     const data = await ress.data
    
//     store.dispatch({ type: "ADD_POST", payload: data})
//     return {
//         props: {
//             data
//         }
//     }
// })


export default CreatePost;