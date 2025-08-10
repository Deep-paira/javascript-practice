# projects related to DOM

## Project link 
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

```Javascript   
const button = document.querySelectorAll('.button');
const body = document.querySelector("body")

button.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e.target)

    if(e.target.id === 'grey'){
      body.style.backgroundColor = 'grey' //(e.target.id)
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = (e.target.id)
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = (e.target.id)
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = (e.target.id)
    }

  });
});
```