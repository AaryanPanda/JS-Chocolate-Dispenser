var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color

const addChocolates = function(chocolates,color,count){
  
  if (count<=0){
    return 'Number cannot be zero/negative'
  }
  else{
    for (let i=0;i<count;i++){
      chocolates.unshift(color)
    }
  }

};

//Progression 2: Remove z chocolates from the top the dispenser

function helperRemove(number,chocolates){

  let removedChocolates =[];
  for (let i=0;i<chocolates;i++){
    removedChocolates.push(number.shift())
  }
  return removedChocolates;

}

const removeChocolates = function(number,chocolates){
  
  return chocolates<0?'Number cannot be zero/negative' : chocolates>number.length ? 'Insufficient chocolates in the dispenser' : helperRemove(number,chocolates)
  
  }

//Progression 3: Dispense z chocolates

function helperDispense(number,chocolates){

  let arr=[]
  
    for(let i=0;i<chocolates;i++){
      arr.push(number.pop())
    }
  
  return arr
  
  };
  
  const dispenseChocolates = function(number,chocolates){
    
    return chocolates<0?'Number cannot be zero/negative' : chocolates>number.length ? 'Insufficient chocolates in the dispenser' : helperDispense(number,chocolates)
  
  }

//Progression 4: Dispense z chocolates of x color

function helperFavouriteColor(chocolates,count,color){

  let arr =[]
  for (let i=chocolates.length-1;i>=0;i--){
    if(chocolates[i]==color){
      arr.push(chocolates[i])
    }
  }
  return arr;

}

const dispenseChocolatesOfColor = function(chocolates,count,color){
 
  return count<0?'Number cannot be zero/negative' : count>chocolates.length ? 'Insufficient chocolates in the dispenser' : helperFavouriteColor(chocolates,count,color)

}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

const noOfChocolates = function(chocolates){
 
  let final =[]
  const arr = ['green', 'silver', 'blue','crimson', 'purple', 'red', 'pink']
  
  arr.forEach((elem) => {
    let count = 0
    chocolates.forEach((elem1) => {
      if (elem==elem1){
        count++
      }
    })
    count>0?final.push(count) : null
  })

  return final
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

const sortChocolateBasedOnCount = function(chocolates){

  chocolates.sort()
  let obj={}

  for (let i=0;i<chocolates.length;i++){
    let count = 0
    for (let j=0;j<chocolates.length;j++){
      if(chocolates[i]==chocolates[j]){
        count++
      }
    }
    obj[chocolates[i]] = count
  }

  const sorted = Object.fromEntries((Object.entries(obj).sort(([,a],[,b])=> b-a)))

  let final=[]
  Object.keys(sorted).forEach((elem)=>{

    for (let i=0;i<obj[elem];i++){
      final.push(elem)
    }

  })

  return final
}

//Progression 7: Change z chocolates of x color to y color

function helperChangeColor(chocolates,color,finalColor){

  for (let i=0;i<chocolates.length;i++){
    if (chocolates[i]==color){
      chocolates[i]=finalColor
    }
  }
  return chocolates;
}

const changeChocolateColor = function(chocolates,number, color, finalColor){
  return number<=0?'Number cannot be zero/negative':color==finalColor?"Can't replace the same chocolates" : helperChangeColor(chocolates,color,finalColor)
}


//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

const changeChocolateColorAllOfxCount = function(chocolates,color,finalColor){

  const final = helperChangeColor(chocolates,color,finalColor)
  let count =0
  final.forEach((el) => {
    if(el==finalColor){
      count++
    }
  })

  return color==finalColor?"Can't replace the same chocolates" : [count,final]
}

//Challenge 1: Remove one chocolate of x color from the top

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
