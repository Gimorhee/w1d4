# W1D4 Note - Call Back

- Functions as values (can be passsed around, canbe assigned to a named var)
- Anonymous functions
- Callbacks
- Higer Order Functions

-  Software is data (variables) and behavior (functions)

```
var names = ['a', 'b', 'c', 'd'];

function printName(name){
  console.log(name);
}

names.forEach(printName);
----------------------------------

names.forEach(function(name){
    console.log(name);
  });

  Anonymous function

```

