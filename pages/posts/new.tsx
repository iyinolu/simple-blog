import React from 'react'
import { Root } from '../index';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../redux/reducers/blogReducer';

const CreatePost:React.FC = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector<State, State>(state => state);
    const [title, setTitle] = React.useState('')
    const [contents, setContents] = React.useState('')

    React.useEffect(() => {
        dispatch({type: "SHOW_POST"})
    }, [posts, dispatch])

    const handleSubmit = (e) => {
        const blogItem = {title: title, body: contents}
        e.preventDefault()
        dispatch({ type: "ADD_POST", payload: [blogItem]})
    }

    const content = (
        <div> 
            <h1> 📝 Add New Post</h1>
            <p> 
                TIP: We recomend you do proper research while blogging, as many people all over the world consume these articles.
            </p>
            <hr style={{ marginBottom: "50px" }}/>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", rowGap: "30px"}}>
                    <p style={{ fontWeight: 600}}> TITLE </p>
                    <input onChange={(e) => setTitle(e.target.value)} placeholder="Enter Post Title" type="text" style={{ fontSize: "20px", backgroundColor: "#ffc83d", padding: "0 20px"}} />
                    <p style={{fontWeight: 600}}> CONTENT </p>
                    <div style={{ display: "flex", flexDirection: "column"}}>
                        <textarea onChange={(e) => setContents(e.target.value)} placeholder="Enter Post Content..." rows={8} style={{ backgroundColor: "#f98d65", fontSize: "20px", padding: "20px"}}/> 
                        <button style={{ width: "20%", marginTop: "40px"}} type="submit"> Submit </button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
    return (
        <Root>
            {[content]}
        </Root>
    )

}


export default CreatePost