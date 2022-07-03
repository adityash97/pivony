import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import axios from 'axios'
import "../App.css";
import Chart from './Chart'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { Bar } from "react-chartjs-2";

const PictureList = [
    {
        id: 1,
        url:
            "https://wcs.smartdraw.com/chart/img/basic-bar-graph.png?bn=15100111830",
    },
    {
        id: 2,
        url:
            "https://d2mvzyuse3lwjc.cloudfront.net/doc/en/UserGuide/images/2D_B_and_W_Pie_Chart/2D_B_W_Pie_Chart_1.png?v=83139",
    },
    {
        id: 3,
        url:
            "https://dyclassroom.com/image/topic/chartjs/v2/line-graph.png",
    },
];

function DragDrop() {
    const [board, setBoard] = useState([]);
    const [board2, setBoard2] = useState([]);
    const [id,setId] = useState("");

    const [{ isOver }, drop] = useDrop(() => ({
        accept:'chart',
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const [{ isOver2 }, drop2] = useDrop(() => ({
        accept: 'chart',
        drop: (item) => addImageToBoard2(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id ) => {
        // const pictureList = PictureList.filter((picture) => id === picture.id);
        if (typeof (id) != 'number'){
            id = parseInt(id.currentTarget.getAttribute("picId"))
        }
            
        const pictureList = PictureList.filter((picture) => id === picture.id);
        if(board.length == 0){
            setBoard((board) => [pictureList[0]]);

        } else if (board2.length == 0){
            setBoard2((board2) => [pictureList[0]]);
        }

        


    };

    const addImageToBoard2 = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);

        setBoard2((board2) => [pictureList[0]]);
    };

   
    return (
        <>
           
            <div className="Board col m-5" ref={drop}>
                {board.length == 0 ? 
                <div className="row">
                    <h5>Please Drag and Drop here </h5>
                </div> 
                : 
                <>
                <div className="row float-end">
                            <div className="col-lg-12">
                                <FontAwesomeIcon onClick={() => setBoard([]) }type="button" className="" icon={faTrash} />
                            </div>
                </div>
                <div className="row">
                    {board.map((picture) => {
                        return <Chart id={picture.id} />;
                    })}
                </div>
                </>
                }
            </div>

            <div className="Board2 col m-5" ref={drop2}>
                {board2.length == 0 ?
                    <div className="row">
                        <h5>Please Drag and Drop here</h5>
                    </div>
                    : 
                    <>
                        <div className="row float-end">
                            <div col>
                                <FontAwesomeIcon type="button" onClick={()=> setBoard2([]) }  className="" icon={faTrash} />
                            </div>
                        </div>
                        <div className="row">
                            {board2.map((picture) => {
                                return <Chart id={picture.id} />;
                            })}
                        </div>
                    </>
                }
            </div>

            <div className="Pictures col m-5 ">
                <h3 className="text-center">Add a Gadget</h3>
                <div className="row">
                    {PictureList.map((picture) => {
                        
                        return (<>
                        
                            <Picture url={picture.url} id={picture.id} />
                            <button type="button" class="btn btn-primary" onClick={addImageToBoard} picId={picture.id}>Add </button>
                            


                        </>)

                    })}
                </div>
                
            </div>
        </>
    );
}

export default DragDrop;