import React, { Component } from 'react';

class ScoreBox extends Component {
    render() {
        return (
            <div className="alert alert-success" role="alert">
                Question { this.props.current } out of { this.props.questions.length } 
                <span className="float-right">Score: <strong>{ this.props.score }</strong></span>
            </div>
        );
    }
}

export default ScoreBox;