import * as React from 'react'
import ListView from '../components/listView'

interface IState{
    dataInfo: {
        chengpinInfo: []
    }
}

export default class List extends React.Component<{} , IState> {

    public constructor(props:any) {
        super(props)
        this.state = {
            dataInfo: {
                chengpinInfo: []
            }
        }
    }

    public componentDidMount() {
        fetch ('http://wwtliu.com/sxtstu/blueberrypai/getChengpinInfo.php')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                dataInfo: data
            })
        })
    }

    /**
     * render
     */
    public render() {
        return (
            <div>
                {
                    this.state.dataInfo.chengpinInfo.length ?
                    <div>
                        <ul>
                            {
                                this.state.dataInfo.chengpinInfo.map((ele,index) => {
                                    return (
                                        <ListView data={ele} key={index} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    :
                    <div>
                        数据正在请求
                    </div>
                }
            </div>
        )
    }
}