const Search = (props) => {

    return (
      <form onSubmit={props.onSubmit}>
        
        <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Business"
        onChange={props.onChange}
        ></input>
      
      <button type = "submit">submit</button>    
      </form>
    )
  }
  
  export default Search
  