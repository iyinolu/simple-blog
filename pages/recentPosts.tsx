/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from "styled-components";
import Image from 'next/image';
import postImage from '../public/postIMG.svg';

const AppBar = styled.div`
    display: flex;   
    flex-flow: row-reverse;    
    position: relative; 
    background-color: #00D791;
    height: 50px;
    text-align: center;
    align-items: center;
    border-bottom: 3px solid #008CFF;
`;

const AppBarBtn = styled.button`
    height: 30px;
    width: 100px;
    background-color: #4b4b4b;
    color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;    
`;

const AppLogo = styled.span`
    position: absolute;
    top: 12%;
    left: 34px;
    font-weight: 800;
    font-size: 24px;
    color: #4b4b4b;
`

const AppBody = styled.div`
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    overflow: scroll;
    background-color: grey;
`
const PostContainer = styled.div`
    height: 100vh;
    width: auto;
    padding: 50px 163px;
    background-color: white;
`
const App: React.FC = () => {
    return (
        <AppBody>
            <AppBar>
                <AppLogo> BLOG-AWAY! </AppLogo> 
                <AppBarBtn style={{ marginRight: '10px'}}> New Post </AppBarBtn>
                <AppBarBtn style={{ marginRight: '10px'}} > All Posts </AppBarBtn>
            </AppBar>
            <PostContainer >
                <Post />
                <Post />

            </PostContainer>

        </AppBody>
    )
}


const RecentPosts: React.FC = () => {
    return (
        <Post />
    )
}



const Post: React.FC = () => {
    return (
        <>
        <div style={{ display: 'flex'}}>
            <div 
                style={{ 
                    height:"auto", 
                    width:"100%", 
                    backgroundColor:'brown', 
                    marginRight: "50px"
            }}>
            </div>
            <div>
                <div style={{ display: 'block'}}>
                    <p style={{ color: "blue", margin:"0"}}> steve blogger </p>
                    <h1 style={{ margin:"0"}}> NextJS Sucks ASF</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <AppBarBtn> View </AppBarBtn>
            </div>
        </div>
        
        </>
    )
}

  













export default App;



