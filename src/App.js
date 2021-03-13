import React ,{ Component } from 'react'
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box'

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchfield:''
    }
    this.func= this.func.bind(this)
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))

    
     

  }
  func(e){
    this.setState({searchfield:e.target.value})
  }
  newfunc=(e)=>{
    this.setState({searchfield:e.target.value})

  }
  // new func which is an arrow function dont need bind however func need bind (hkeya teb3a scope)
  
   
  render(){
    const { monsters, searchfield} = this.state;
    const filteredMon=  monsters.filter(monster=>monster.name.toLowerCase().includes(searchfield.toLowerCase()))
    
    return (
      <div className="App">
        <h1>User Search</h1>
        <SearchBox search_person={this.newfunc}/>
        
        <CardList monster={filteredMon}>
          
        </CardList>
        
        
      
      </div>
    )
  }

}
export default App;