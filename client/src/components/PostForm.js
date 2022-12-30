import React, {useState} from 'react';
import Axios from 'axios';

function PostForm() {
    const url = "https://localhost:3000/api/Create"
    const [data, setData] = useState({
        entry:""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            entry: data.entry
        })
        .then( res => {
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id="entry" value={data.entry} type="text"/>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default PostForm