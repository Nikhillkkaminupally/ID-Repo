import React from 'react';
import Toggle from 'react-toggle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IncrementCounter from '../IncrementCounter';
import IncrementCounterUsingHooks from '../IncrementCounterUsingHooks';
import './index.css';

export class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showClassBasedCounter: true
        }
    }

    switchCounterView = (event) => {
        this.setState({
            showClassBasedCounter: event.target.checked
        })
    }

    render() {
        const { showClassBasedCounter } = this.state;
        return (
            <div>
                <Card >
                    <CardContent className="label-wrapper">
                        <Toggle
                            defaultChecked={showClassBasedCounter}
                            icons={false}
                            onChange={this.switchCounterView} />
                        <h1>{showClassBasedCounter ? 'Class ' : 'Functional '} Based Component</h1>
                    </CardContent>
                </Card>
                {showClassBasedCounter ? <IncrementCounter /> : <IncrementCounterUsingHooks />}

            </div>
        );
    }
}

Content.propTypes = {};

export default Content;
