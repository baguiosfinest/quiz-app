import React, { Component } from 'react'

export default class Question extends Component {


    onChange(e){
        e.preventDefault();
        const { setCurrent, setScore, question } = this.props;
        
        let selected = e.target.value;

        if(selected == question.correct){
            setScore(this.props.score + 1);
        }

        setCurrent(this.props.current + 1);

    }

    render() {
        return (
            <div className="jumbotron">
                <h3>{ this.props.question.text }</h3>
                <hr />
                <ul className="list-group">
                    {
                        this.props.question.choices.map( choice => {
                            return(
                                <li key={choice.id} className="list-group-item">
                                    { choice.id } 
                                    <input 
                                        type="radio" 
                                        onChange={this.onChange.bind(this) } 
                                        name={this.props.question.id} 
                                        value={choice.id} />{ choice.text }
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}
