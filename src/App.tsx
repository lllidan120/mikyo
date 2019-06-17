import * as React from 'react';
import Hello from './components/Hello'
import List from './pages/List'

class App extends React.Component {

    /**
     * myClickHandler
     */
    public myClickHandler(e:string) {
        alert(e)
    }

    public render() {
        return (
            <div className="App">
                <Hello title="dashazi" age={12} onMyClick={this.myClickHandler} />
                <List />
            </div>
        );
    }
}

export default App;
