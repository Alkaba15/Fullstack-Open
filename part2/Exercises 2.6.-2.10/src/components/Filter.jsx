const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      filter shown with <input type="search" value={filter} onChange={handleFilter} />
    </div>
  )
}

export default Filter