import Header from "./Header";
import Footer from "./Footer";
import Card from './Card';
import Button from './Button'
import Box from './Box'
import Student from './Student'
import Greeting from "./Greeting";
import List from "./List"
import Pfp from "./Pfp"

const App = () => {

  fetch('http://localhost:3000').then(res => res.text()).then(data => console.log(data))
  const fruits = [{name: "apple", cals:97},
        {name: "pineapple", cals:66},
        {name: "orange", cals:89}
    ];

  return(
    <div>
      <Header/>
      <Card/>
      <Box/>
      <h2>Student Data</h2>
      <Student name="Jolene" age={33} subject="English" isStudent={false} />
      <Student name="Daphne" age={21} subject="Data Science" isStudent={true}/>
      <Student/>
      <Greeting isLoggedIn={true} userName="starbucksmonster23"/>
      <Greeting isLoggedIn={false} userName="queenofhearts"/>
      
      <List fruitList={fruits} />
      <Button/>
      <Pfp/>
      <Footer/>
    </div>
  );
}

export default App