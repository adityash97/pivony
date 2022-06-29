import React from "react";
import { useDrag } from "react-dnd";
import axios  from "axios";
import callapi from './Chart'
function Picture({ id, url }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "chart",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        
    }));


    return (
        <>
            <img
                ref={drag}
                src={url}
                height="130px"
                style={{ border: isDragging ? "5px solid pink" : "0px" }}
            />
        </>
    );
}

export default Picture;