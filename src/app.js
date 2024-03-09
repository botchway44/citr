 //code here


 const Pet = (props) =>{

  return React.createElement('div', {}, [
    React.createElement('h1', { key : 1}, props.name),
    React.createElement('h2', { key : 2}, props.animal),
    React.createElement('h3', { key : 3}, props.breed),
  ])
 }

 const App = () => {
  return React.createElement(
    'div',
    {},
   [
     React.createElement('h1', { key : 1}, 'Adopt Me!'),
     React.createElement(Pet,{ key : 2, name : "Luna", animal : "Dog", breed : "Havenese"}),
     React.createElement(Pet,{ key : 3, name : "Pepper", animal : "Bird", breed : "Cockatiel"}),
     React.createElement(Pet,{ key : 4, name : "Doink", animal : "Cat", breed : "Mixed"}),
  ]
  );
};

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));


