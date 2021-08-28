import React from 'react'
import { Root } from '../index';

const CreatePost:React.FC = () => {
    const content = (
        <div> 
            <h1> 📝 Add New Post</h1>
            <p> 
                TIP: We recomend you do proper research while blogging, as many people all over the world consume these articles.
            </p>
            <hr style={{ marginBottom: "50px" }}/>
            <form>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", rowGap: "30px"}}>
                    <p style={{ fontWeight: 600}}> TITLE </p>
                    <input placeholder="Enter Post Title" type="text" style={{ fontSize: "20px", backgroundColor: "#ffc83d", padding: "0 20px"}} />
                    <p style={{fontWeight: 600}}> CONTENT </p>
                    <div style={{ display: "flex", flexDirection: "column"}}>
                        <textarea placeholder="Enter Post Content..." rows={8} style={{ backgroundColor: "#f98d65", fontSize: "20px", padding: "20px"}}/> 
                        <button style={{ width: "20%", marginTop: "40px"}} type="submit"> Submit </button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
    return (
        <Root>
            {content}
        </Root>
    )

}


export default CreatePost