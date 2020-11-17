import React, {Component} from 'react'


class FilterString extends Component{
    constructor(){
        super();
        this.state={
            animals: ['dogs', 'cats', 'monkeys', 'hamsters', 'racoons', 'rats', 'mice'],
            userInput: '',
            filteredAnimals: []
        }
        

    }

    handleChange(val){
        this.setState({ userInput: val})
    }

    filterAnimals(userInput){
        let animals = this.state.animals;
        let filteredAnimals = [];

        for(let i = 0; i < animals.length; i++){
            if(animals[i].includes(userInput)){
                filteredAnimals.push(animals[i])
            }
        }

        this.setState({ filteredAnimals: filteredAnimals})
    }






    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.animals)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.filterAnimals(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringPB'>Filtered Animals: {JSON.stringify(this.state.filteredAnimals)}</span>
            </div>
        )
    }
}


export default FilterString