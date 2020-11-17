import React, {Component} from 'react'

class FilterObject extends Component{
    constructor(){
        super();
        this.state={
            people: [
                {
                    name: 'Josh',
                    age: 25,
                    game: 'black ops zombies',
                },
                {
                    name: 'Nate',
                    age: 26,
                    hobby: 'games',
                },
                {
                    name: 'Claire',
                    age: 24,
                    job: 'nurse',
                }
            ],
            userInput: '',
            filteredArray: []
        }

        
    }
    
    handleChange(val) {
        this.setState({ userInput: val})
    }
    filterPeople(prop){
        let people = this.state.people;
        let filteredPeople = [];

        for(let i = 0; i < people.length; i++){
            if(people[i].hasOwnProperty(prop)) {
                filteredPeople.push(people[i])
            }
        }

        this.setState({ filteredPeople: filteredPeople})
    }



    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.people)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.filterPeople(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredPeople)}</span>
            </div>
        )
    }
}


export default FilterObject