function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText=baseField.value;
    const base=parseFloat(baseValueText);

    //  get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText= heightField.value;
    const height = parseFloat(heightValueText);

    const area= 0.5*base*height;

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText=area;
    // add to calculation entry
    addToCalculationEntry('Triangle',area);
}

function calculateRectangleArea(){
    // get rectangle width
    const widthField  = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText= lengthField.value;
    const length= parseFloat(lengthValueText);
    //  validate input
    if(isNaN(width) || isNaN(length)){
        alert('Please Insert a number');
        return;
    }
    // calculate area
    const area = width * length;
    
    // show rectangle area
    const rectangleAreaSpan= document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText= area;
    // add to calculation entry
    addToCalculationEntry('Rectangle',area);

}

// reusable function reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height= getInputValue('parallelogram-height');
    // validate
    if(isNaN(base) || isNaN(height)){
        alert('Please Insert a number');
        return;
    }

    const area = base * height;
    setElementInnerText('parallelogram-area',area);

    // add to calculation entry
    addToCalculationEntry('parallelogram',area)
}

// Calculate ellipse area
function calculateEllipseArea(){
    const majorRadius= getInputValue('ellipse-major-radius');
    const minorRadius=getInputValue('ellipse-minor-radius');

    const area=3.1416*majorRadius*minorRadius;
    const areaTwoDecimal =area.toFixed(2);
    setElementInnerText('ellipse-area',areaTwoDecimal);

    // add to calculation entry
    addToCalculationEntry('Ellipse',areaTwoDecimal);
}



// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText= inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set span, p, div, etc text
function setElementInnerText(elementId,area){
    const element =document.getElementById(elementId);
    element.innerText = area;
}

// add to calculation entry
/*
1. get the element where you want to add the dynamic HTML
2.create an element you want to add
3. if needed add some class
4. set inner HTML.it coulde be dynamic template string
5.append the created element as a child of the parent


*/
function addToCalculationEntry( areaType,area){
    console.log(areaType+' '+area);
    const calculationEntry=document.getElementById('calculation-entry');

    const count=calculationEntry.childElementCount;
    const p=document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML= `${count+1}. ${areaType} ${area} cm<sup>2</sup>
    <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p);



}

// Data validation
/*
1. set the proper type of input field
2. check type using typeof
3. NaN means: Not a number. isNaN is checking whether the input is not a number or not


*/