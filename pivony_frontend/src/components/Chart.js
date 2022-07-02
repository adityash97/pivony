
import { Bar,Pie,Line } from "react-chartjs-2";
import React, {Component} from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import axios from "axios";


class SomeChart extends Component{
    constructor(props ){
        super(props)
        this.state = {
            chartData : {
                labels: [],
                datasets: [
                    {
                        label: "",
                        data: [],
                        backgroundColor: ["aqua", "green", "red", "yellow","black"],
                        borderColor: ["aqua", "green", "red", "yellow","black"],
                        borderWidth: 0.5,
                    },
                ],
            }
        }
    }
    componentDidMount(props){

        if (this.props.id == 1){
            this.callAPi('bar')
           
        }else if (this.props.id == 2){
            this.callAPi('pie')

        }else if(this.props.id ==3){
            this.callAPi('funnel')

        }
        
    }

    callAPi = (endpoint) => {
        this.url = 'http://localhost:8000/api/' + endpoint
        axios.get(this.url)
            .then(res => {
                this.labels = []
                this.datas = []
                res.data.map((Element) => {
                    this.labels.push(Element.paramA)
                    this.datas.push(Element.paramB)

                })
                this.setState({
                    chartData: {
                        labels: this.labels,
                        datasets: [
                            {
                                label: "total count/value",
                                data: this.datas,
                                backgroundColor: ["aqua", "green", "red", "yellow", "black"],
                                borderColor: ["aqua", "green", "red", "yellow", "black"],
                                borderWidth: 0.5,
                            },
                        ],
                    }
                })

            })
    }

 
    render(){
        return (
            
        <div>
                {this.props.id == 1 ? <Bar
                    data={this.state.chartData}
                    width={300}
                    height={300}
                    option={{
                        maintainAspectRation: false,
                       
                        
                    }}
                /> : this.props.id == 2 ? <Pie
                    data={this.state.chartData}
                    width={235}
                    height={235}
                    option={{
                        maintainAspectRation: false
                    }}
                    /> : <Line
                        data={this.state.chartData}
                        width={235}
                        height={235}
                       
                    />
            
            }
                

                


            
                
        </div>)
    }
}

export default SomeChart;