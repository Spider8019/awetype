import React from "react";
import { Chart } from "react-google-charts";

export const options = {
    title: "alphabets per second",
    curveType: "function",
    legend: { position: "bottom" },
    backgroundColor: {
        fill: "transparent"
    },
    hAxis: {
        textStyle:{color: '#FFF'}
    },
    vAxis:{
        textStyle:{color:"#fff"}
    },
    titleTextStyle:{
        color:"#fff"
    },
    legendTextStyle:{
        color:"#fff"
    },
    series: {
        0: { color: '#f25849' },
        1: { color: '#11e5b0' },
    }
};

const Graph = ({ data }) => {
    // console.log(data)
    let final = [["alphabets per minute", "raw","apm"]]
    const raw = data.map(item => { return item.timestamp - data[0].timestamp })
    const apmtemp = data.filter(item => {return item.correct===item.keypressed && item.timestamp}).map(item => { return item.timestamp - data[0].timestamp })
    for (let i = 1; i <= Math.floor(raw[raw.length - 1] / 1000) + 1; i++) {
        final.push([i, raw.filter(item => { return item < i * 1000 && item > (i - 1) * 1000 }).length * 10,apmtemp.filter(item => { return item < i * 1000 && item > (i - 1) * 1000 }).length * 10])
    }
    return (
        <Chart
            chartType="LineChart"
            width="100%"
            height="200px"
            backgroundColor='#E4E4E4'
            data={final}
            options={options}
        />
    );
}

export default Graph
