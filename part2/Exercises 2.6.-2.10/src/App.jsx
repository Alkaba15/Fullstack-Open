import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber

    }
    const isPersonExist = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())
    if (isPersonExist) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')

  }
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleAddPerson={handleAddPerson} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App