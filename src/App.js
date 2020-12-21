import './App.css';
import './assets/logo.svg';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Movieindex from './movieindex'
import  Axios from 'axios'




class App extends Component{

constructor(props){
  super(props)

  this.state = {rows:[]}
}

componentDidMount(){
  this.search('her')
}

  search = (keyword)=>{
    console.log(keyword)
    var dataArray = []
    var url = 'https://api.themoviedb.org/3/search/movie?api_key=cc5ab55b71f131b74d3187ca23396194&query='+keyword;
    Axios.get(url).then(result=>{
      console.log(JSON.stringify(result.data.results))
      result.data.results.forEach(item=>{
        item.poster_src="https://images.tmdb.org/t/p/w185" + item.poster_path
        dataArray.push(item)
      })
      this.setState({rows: dataArray}) //update state
    })
    
  }

  render() {
  return (
    <div className="App">
      {/*JSX = javascript+xml */}
      <table className="NavBar">
        <tbody>
          <tr>
            <td>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/88/MoogleFFIXConcept.png/220px-MoogleFFIXConcept.png" width="50"/>
            </td>
            <td>
              Kupo
            </td>
          </tr>
        </tbody>
      </table>
      <input style={{fontSize: 24,display:'block',width:'100%',paddingLeft:8}}
      placeholder="Enter your kupo movie"
      onChange={(event) => {this.search(event.target.value)} }/>

      {this.state.rows.map(item=> (
       <Movieindex movie={item}/>

      ))}

   
    
    </div>
    


    
  );
}
}

export default App;
