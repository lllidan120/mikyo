import * as React from 'react'

interface IProps {
    data: {
        title: string,
        content: string
    }
}


export default class Hello extends React.Component<IProps> {
    public constructor(props: IProps) {
        super(props)
        
    }
    public render() {
        const {title , content} = this.props.data
        return (
            <li>
                {title} : {content}
            </li>
        )
    }
}