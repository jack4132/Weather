import React,{useState} from 'react'
import "./style/Card.css"

const Card=({data,selected})=> {

    return (
        <div className={`card-container ${selected && "card-selected"}`}>
            <div className="card-content">
                <img src="imgs/avatar.svg"/>
                <div style={{lineHeight:0}}>{/*className="default-text text-grey text-font-18"*/}
                    <p>
                        {data.username}
                    </p>
                    <p>
                        {data.age}
                    </p>
                    <p>
                        {data.state}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card
