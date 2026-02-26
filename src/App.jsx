import Header from "./Header";
import Footer from "./Footer";
import Card from './Card';
import Button from './Button/Button'
import Box from './Box'
import Student from './Student'
import Greeting from "./Greeting";
import List from "./List"

const App = () => {
  return(
    <div>
      <Header/>
      <Card/>
      <Button/>
      <Box/>
      <h2>Student Data</h2>
      <Student name="Jolene" age={33} subject="English" isStudent={false} />
      <Student name="Daphne" age={21} subject="Data Science" isStudent={true}/>
      <Student/>
      <Greeting isLoggedIn={true} userName="starbucksmonster23"/>
      <Greeting isLoggedIn={false} userName="queenofhearts"/>
      
      <List/>
      <Footer/>
    </div>
  );
}

export default App