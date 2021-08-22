import React,{useState} from 'react'
import "./style/Table.component.css"

const Table=({data})=> {
    const [selected,setSelected] = useState("")
    console.log(selected)
    return (
        <div className="table-container" style={{overflow:"auto",maxHeight: 220}}>
            <table>
                {/* <thead>
                    <tr>
                        <th>

                        </th>
                    </tr>
                </thead> */}
                <tbody>
                    {data && data.map((d,index)=>
                        <tr onClick={()=>setSelected(index)}>
                            {console.log(selected==index,index)}
                            <td className={`${selected==index && "selected-item"}`}>
                                <div style={{display:'flex', justifyContent:"space-between"}}>
                                    <div style={{display:'flex'}}>{/*className="default-text text-grey text-font-18"*/}
                                        <img src="imgs/avatar.svg"/>
                                        <div style={{display:"flex",marginLeft:20}}>
                                            <p>{d.username}-</p>
                                            <p>&nbsp;{d.age}-</p>
                                            <p>&nbsp;{d.state}</p>
                                        </div>
                                    </div>
                                    <img src="imgs/hamburger.svg" />
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table