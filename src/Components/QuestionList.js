import React, { Component } from 'react';
import Question from './Question';

export default class QuestionList extends Component {
    render() {
        return (
            <div className="questions">
                {
                    this.props.questions.map( question => {
                        if(question.id === this.props.current){
                            return <Question 
                                key = {question.id} 
                                question={ question } 
                                { ...this.props } />
                        }
                        
                    } )
                }
            </div>
        )
    }
}
