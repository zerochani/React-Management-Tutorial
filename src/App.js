import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
const customers = [
{
  'id': 1,
  'img': 'https//placeimg.com/64/64/1',
  'name': '박영찬',
  'birthday': '69453',
  'gender': '남자',
  'job': '대학생'

},
{
  'id': 2,
  'img': 'https//placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '431414',
  'gender': '남자',
  'job': '프로그래머'

},
{
  'id': 3,
  'img': 'https//placeimg.com/64/64/2',
  'name': '이순신',
  'birthday': '124535',
  'gender': '남자',
  'job': '디자이너'

}
]
class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c=> {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />

            );
          }

          )
        }
      </div>
    );
  }
}

export default App;
