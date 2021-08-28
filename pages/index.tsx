/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "styled-components";
import postImage from '../public/postIMG.svg';
import Link from 'next/link'
import React from 'react';

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
    :hover {
        background-color: white;
        color: #4b4b4b
    }
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
    height: 150vh;
    width: auto;
    padding: 50px 163px;
    background-color: white;
`

interface RootProp {
  children: JSX.Element[];
};

export const Root: React.FC<RootProp> = (props) => {
  return (
    <AppBody>
        <AppBar>
            <Head>
              <title>
                Blog Away!
              </title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppLogo> 
              BLOG-AWAY!
            </AppLogo> 
            <AppBarBtn style={{ marginRight: '10px'}}> 
              <Link href="/posts/new">
                <a>New Post</a> 
              </Link> 
            </AppBarBtn>
            <AppBarBtn style={{ marginRight: '10px'}} > 
              <Link href="/posts/all">
                <a>All Posts</a> 
              </Link> 
            </AppBarBtn>
        </AppBar>
        <PostContainer >
            {props.children}
        </PostContainer>
    </AppBody>
  )
}

const App: React.FC = () => {
  const title = "NextJS Sucks ASF"
  const content = 
    "LLorem ipsum dolor sit amet, consectetur adipiscing elit," +
    "sed do eiusmod tempor incididunt ut labore et dolore magna" + 
    "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  const body = (
    <React.Fragment>
      <div style={{ display: "flex", position: "relative"}}>
        <h1 style={{ margin: "0", marginBottom: "20px", marginLeft: "20px"}}> 
          🕑 Latest Posts 
          <StyledButton style={{ position: "absolute", right: "0px", top: "10px"}}> Show All </StyledButton>
        </h1>
      </div>
      <hr style={{ marginBottom: "50px"}} />
      <Post color="#c5a5ff" content={content} title={title} />
      <Post color="#eefa72" content={content} title={title} />
    </React.Fragment>
  )
  return (
    <Root>{[body]}</Root>
  )
}


const StyledButton = styled.button`
    height: 30px;
    width: 100px;
    background-color: #4b4b4b;
    color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;    
    :hover {
        background-color: #ababab;
        color: white;
    }
`;

const PostImg = styled.div`
    height: auto;
    width: 100%;
    background-color: ${(props:postImgProp) => props.color};
    margin-right: 50px;
    border-radius: 20px;
    max-width: 200px;
    min-width: 200px;
    min-height: 250px;
    max-height: 250px;

`

type postImgProp = {
    color: string;
}
interface Props {
    color: string;
    title: string;
    content: string;

}

export const Post: React.FC<Props> = ({ color, title, content}) => {
    return (
        <>
          <div style={{ display: 'flex', marginTop: "40px"}}>
              <PostImg color={ color }></PostImg>
              <div>
                  <div style={{ display: 'block'}}>
                      <p style={{ color: "blue", margin:"0"}}> Default Blogger </p>
                      <h1 style={{ margin:"0"}}> { title } </h1>
                      <p> 
                          {content}
                      </p>
                  </div>
                  <StyledButton> 
                    View 
                  </StyledButton>
              </div>
          </div>
        </>
    )
}


export default App;



// LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

// NextJS Sucks ASF