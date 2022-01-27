
import React,{useState} from 'react'

const Todo = () => {
    const [InputData, setInputData] = useState('')
    const [items, setItems] = useState([])
    const addItem=()=>{
        if(!InputData){
            alert("enter some data")
        }else{
            setItems([...items, InputData])
            setInputData('')
        }
    }
    const Delete=(id)=>{
        console.log(id)
        const newArr=items.filter((element,index)=>{
            return index !==id;
        })
        setItems(newArr)
    }
    const removeAll=()=>{
        setItems([])
    }

    return (
        <div id='Todo'>
                <h5 className='Heading'>This Is My First Dumy ToDo App</h5> <br />
            <div>
                <input type="text" 
                    value={InputData}
                    onChange={(e)=>setInputData(e.target.value)}
                />
                <button className='btn-sm btn-success' onClick={addItem}>Add</button>
            </div>
            <div>
                {
                    items.map((element,index)=>{
                        return (
                        <div  key={index}>
                            <h4  className='card' > {element}
                                <button className='btn-sm btn-danger' onClick={()=>Delete(index)}>Remove</button>
                            </h4>
                            </div>
                        )
                    })
                }
            </div> <br />
            <button className='btn-sm btn-danger' onClick={removeAll}>RemoveAll</button>
        </div>
    )
}

export default Todo
