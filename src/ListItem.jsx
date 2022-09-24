import React from "react";

const ListItem = (props) => {
    return (
        <>
        <div className="todo_style">
            <i className="fa fa-trash-o" onClick={() =>{
                props.onSelect(props.id);
            }} ></i>
            <li>{props.text}</li>
        </div>
        </>
    )
}

export default ListItem;