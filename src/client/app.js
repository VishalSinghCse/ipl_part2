document.addEventListener("DOMContentLoaded", () => {
    const chars = {
        chart: {
            type: 'column',

        },
        credits: {
            enabled: false
        },
        title: {
            text: ""
        },
        tooltip: {
            borderColor: "#000000",
            borderRadius: 20
        },
        yAxis: {
            title: {
                text: ""
            }
        },
        xAxis: {
            name: "",
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ],

    };
    fetch("../output/totalMatch.json")
        .then(res => res.json())
        .then(jsonData => {
            console.log(Object.values(jsonData));
            chars.series[0].data = [...Object.values(jsonData)];
            chars.series[0].name = "Matches played";
            chars.xAxis.categories = [...Object.keys(jsonData)];
            chars.xAxis.categories = chars.xAxis.categories.map(
                category => `<strong>${category}</strong>`
            );
            chars.xAxis.name = "IPL seasons";
            chars.yAxis.title.text = "Matches played per year";
            chars.title.text = "<strong>Matches played per year</strong>";
            Highcharts.chart("container", chars);
        });


    fetch("../output/economicalBowlers.json")
        .then(res => res.json())
        .then(jsonData => {
            chars.series[0].data = [...Object.values(jsonData)];
            chars.series[0].name = "Economical bowlers";
            chars.xAxis.categories = [...Object.keys(jsonData)];
            chars.xAxis.categories = chars.xAxis.categories.map(
                category => `<strong>${category}</strong>`
            );
            chars.xAxis.name = "IPL seasons";
            chars.yAxis.title.text = "economical bowlers";
            chars.title.text = "<strong>Top 10 economical bowlers in 2015"
            Highcharts.chart("container2", chars);

        })


    fetch("../output/extraCount.json")
        .then(res => res.json())
        .then(jsonData => {
            chars.series[0].data = [...Object.values(jsonData)];
            chars.series[0].name = "Extra Runs";
            chars.xAxis.categories = [...Object.keys(jsonData)];
            chars.xAxis.categories = chars.xAxis.categories.map(
                category => `<strong>${category}</strong>`
            );
            chars.xAxis.name = "IPL seasons";
            chars.yAxis.title.text = "Extra Run";
            chars.title.text = "<strong>Extra runs conceded per team in 2016"
            Highcharts.chart("container1", chars);

        })

    fetch("../output/winCount.json")
        .then(res => res.json())
        .then(winningData => {
            let teamNames = Object.keys(winningData)
            // console.log('winns per year', teamNames)
            let seasons = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
            let teamwins = teamNames.reduce((winCount, teamname) => {
                let seasonwins = Object.keys(winningData[teamname])
                //console.log('seasonwins', seasonwins)
                if (winCount.hasOwnProperty(teamname)) {
                    seasons.map(year => {
                        if (seasonwins.includes(year)) {
                            winCount[teamname].push(winningData[teamname][year])
                        } else {
                            winCount[teamname].push(0)
                        }
                    })
                    return winCount
                } else {
                    winCount[teamname] = []
                    seasons.map(year => {
                        if (seasonwins.includes(year)) {
                            winCount[teamname].push(winningData[teamname][year])
                        } else {
                            winCount[teamname].push(0)
                        }
                    })
                    return winCount
                }
            }, {})
            let winners = Object.keys(teamwins)
            // console.log('teamwins', teamwins)
            let winCountData = winners.reduce((winCount, winner) => {
                var data = {}
                data['name'] = winner
                data['data'] = teamwins[winner]
                winCount.push(data)
                return winCount
            }, [])
            // console.log('winCountData', winCountData)
            // HighChart code
            Highcharts.chart('container3', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Total Wins of Each Team'
                },
                xAxis: {
                    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
                    crosshair: true
                },
                yAxis: {
                    title: {
                        text: 'Total Wins'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y} wins</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: winCountData
            })






        })

    //------------------------------------------------------------------




});



