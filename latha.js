let display = document.getElementById("display");

function appendValue(value) 
{
  display.value += value;
}

function clearDisplay() 
{
  display.value = "";
}

function calculate() 
{
  let result;
  try 
  {
    result = eval(display.value);
    if (isNaN(result))
    {
      throw new Error("Invalid input");
    }
    display.value = result;
  } 
  catch (error) 
  {
    display.value = "Error";
  }
}
function deleteValue() 
{
  display.value =display.value.toString().slice(0,-1);
}
function squareValue() 
{
  display.value =display.value*display.value;
}
function rootValue() 
{
  display.value =Math.sqrt(display.value);
}
