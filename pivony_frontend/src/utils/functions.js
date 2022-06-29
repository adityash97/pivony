callAPi = (endpoint) => {
    this.url = 'http://localhost:8000/' + endpoint
    axios.get(this.url)
        .then(res => {
            console.log(res)
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