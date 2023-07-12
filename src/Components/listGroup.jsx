import React, { Component } from 'react'

const ListGroup = (props) => {
    const {items, selectedItem, onItemSelect} = props;

    const allItems = [{_id:"", name:"All Geners"}, ...items];

    console.log(selectedItem === allItems[0]);
    return (
        <React.Fragment>
            <ul className="list-group">
                {allItems.map( item => 
                    <li key={item._id}
                        onClick={() => onItemSelect(item)}
                        className= {item.name === selectedItem.name ? "list-group-item active":"list-group-item"}>
                        {item.name}
                    </li>
                )}
            </ul>
        </React.Fragment>
    );
}

export default ListGroup;
