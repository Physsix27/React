// REACT NEEDS TO BE IMPORT FROM THE REACT LIBRARY,
// IS RESPOSIBLE TO RENDER ANYTHING TO THE 'DOM'
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// THIS IS A REACT COMPONENT
class App extends Component {

  state = {
    persons: [
      { id: 'asdfd', name: 'Max', age: 28 },
      { id: 'SDEQs', name: `Starlyn`, age: 21},
      { id: '234rs', name: `David`, age: 15 },
    ],
    otherState: `some other value`,
    showPersons: false,
  };

  // switchNameHandler = (newName) => {
  //   // alert(`BUTTON CLICKED...!`);
  //   // DON'T DO THIS this.state.persons[0].name = `Maxamimilian`;
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: `Starlyn`, age: 21},
  //       { name: `David`, age: 27 }
  //     ]
  //   })
  // }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = this.state.persons[personIndex];
    const person = { ...this.state.persons[personIndex] };

    // updating the person nameChangeHandler
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); // REMOVES ONE ELEMENT FROM THE ARRAY
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    // IF `showPersons` IS TRUE THE WE WILL MAKE `persons` NOT NULL
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (

              // RENDERING A LIST OF PERSONS FROM AN ARRAY
            <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangeHandler(event, person.id) } />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            change={this.nameChangeHandler}/> */}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Welcome</h1>
        <button
          style={style}
          onClick={ this.togglePersonHandler }>
          Toggle Persons
        </button>
         {persons}
      </div>
    );

    // TAKES AT LEATS 3 ELEMENTS
    // FIRST('THE ELEMENT WE WANT TO RENDER TO THE DOM')
    // SECOND('THE CONFIGURATION FOR THIS, A JS OBJECT[OPTIONAL]')
    // THIRD('ANY AMOUNT OF CHILDREN [WHATS NESTED INSIDE THE DIV]')
    //return React.createElement('div', {className: 'person'}, React.createElement('h1', null, 'Hi, I\'m a React app'));
  }
}

export default App;
