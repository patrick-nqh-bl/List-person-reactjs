import React from 'react';
import './App.css';

const App = () => (<PersonList />)

const PersonList = () => {
  const peoples = [
    {
      age: 22, name:'John', job: 'developer',
      url: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    },
    {
      age: 32, name:'John', job: 'developer',
      url: "https://randomuser.me/api/portraits/thumb/men/70.jpg"
    },
    {
      age: 22, name:'John', job: 'developer',
      url: "https://randomuser.me/api/portraits/thumb/men/23.jpg"
    }
]
const persons = peoples.map((people, index) =>{
  return <Person person={people} key={index}/>;
})
  return (
    <section>
      {persons}
    </section>
  );
}

const Person = (props) => {
  return (
    <div className="person">
      <img src={props.person.url} alt="avt"/>
      <div>
        <h4>{props.person.name}</h4>
        <h4>{props.person.job}</h4>
        <h3>{props.person.age}</h3>
      </div>
    </div>
  )
}

export default App;
