import React, { Component } from 'react'

export default class Results extends Component {
    render() {
        let message = '';
        const percent = (this.props.score / this.props.questions.length) * 100;

        if(percent > 80) {
            message = 'Awesome Job!';
        } else if(percent < 80 && percent > 60){
            message = 'You Did OK!';
        }else {
            message = 'You Did Horrible!';
        }

        return (
            <div className="jumbotron text-center">
                <h3>Your final score is: { this.props.score }</h3>
                <p className="lead">You got {this.props.score} out of {this.props.questions.length}</p>
                <h4>{ percent.toFixed(2) }% - { message }</h4>
                <hr />
                <a href="/">Take it Again</a>
            </div>
        )
    }
}
