import React from 'react'
import { GetServerSideProps } from 'next';
import { Root, Post } from '../index';
import axios from 'axios';
import { ReactReduxContext } from 'react-redux';

type axisContent ={
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

const CreatePost:React.FC<dataProp> = ({ data }) => {
    {console.log(data)}
    const body = data.map((value, index) => {
        return (
            <Post key={index} color="#eefa72" content={value.body} title={value.title} />
        )
    });
    {console.log(data)}
    return (
        <Root>
            {body}
        </Root>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await axios.get("https://simple-blog-api.crew.red/posts/")
    const data = await res.data
    console.log(data)

    return {
        props: {
            data
        }
    }
}


export default CreatePost;