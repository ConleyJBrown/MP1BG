countryNames = [
    "Afghanistan", "Albania", "Algeria", "Andorra",
    "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
    "Australia", "Austria","Azerbaijan","Bahamas","Bahrain",
    "Bangladesh", "Barbados","Belarus", "Belgium", "Belize",
    "Benin","Bermuda","Bhutan","Bolivia", "Bosnia and Herzegovina",
    "Botswana", "Brazil", "Brunei", "Bulgaria","Burkina Faso",
    "Burundi", "Cambodia", "Cameroon","Canada", "Cape Verde", 
    "Cayman Islands", "Central African Republic", "Chad", "Chile",
    "China", "Colombia", "Comoros", "Cook Islands", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "East Timor", "Ecuador", "Egypt", "El Salvador", "England",
    "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji",
    "Finland", "France", "Gabon", "Georgia", "Germany", "Ghana",
    "Greece","Greenland","Grenada","Guam","Guatemala","Guinea",
    "Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong", "Hungary",
    "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
    "Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya",
    "Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho",
    "Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
    "Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali",
    "Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia",
    "Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru",
    "Nepal", "Netherlands","New Caledonia", "New Zealand","Nicaragua",
    "Niger", "Nigeria","North Korea","Norway","Oman","Pakistan","Palau",
    "Palestine", "Panama", "Papau New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Puerto Rico", "Qatar","Republic of the Congo",
    "Romania", "Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia",
    "Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe",
    "Saudi Arabia","Scotland","Senegal","Serbia","Seychelles", "Sierra Leone",
    "Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa",
    "South Korea", "South Sudan","Spain","Sri Lanka","Sudan","Suriname",
    "Swaziland", "Sweden","Swittzerland","Syria","Taiwan","Tajikistan",
    "Tanzania","Thailand","The Gambia","Togo","Tonga","Trinidad and Tobago",
    "Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
    "UAE","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu",
    "Venezuela","Vietnam","Wales","Yemen","Zambia","Zimbabwe"
]

countries = []

class Country{
    constructor(name, imageSource)
    {
        this.name = name;
        this.imageSource = imageSource;
    }
}

function addNewCountry(name){
    //console.log(name);
    let newCountry = new Country(name, `assets/pics/${name}.jpeg`);
    //console.log(newCountry);
    countries.push(newCountry);
}

countryNames.forEach(element=> addNewCountry(element));

let result = document.getElementById("whetherCorrect");
let scoreTable = document.getElementById("yourScore");
let score = 0;
let attempts = 0;
let quit = false;

let randomCountry = countries[Math.floor(Math.random()*countries.length)];

console.log(randomCountry);


let image = document.getElementsByClassName("flagImage")[0];
image.src = randomCountry.imageSource;

let correctAnswer = Math.floor(Math.random()*4+1);
console.log(correctAnswer);

let possibleAnswers = countryNames;
for( let i = 0; i < possibleAnswers.length; i++){ 
    
    if ( possibleAnswers[i] === randomCountry.name) { 

        possibleAnswers.splice(i, 1); 
    }

}


for(let i = 1; i <=4;  i++)
{
    let button = document.getElementById("button"+i);
    if(i === correctAnswer)
    {
        button.textContent = randomCountry.name;
        button.addEventListener("click", handleCorrectAnswer);
    }
    else
    {
       let wrongAnswerIndex = Math.floor(Math.random()*countries.length);
        button.textContent = possibleAnswers[wrongAnswerIndex];
        possibleAnswers.splice(wrongAnswerIndex,1);
        button.addEventListener("click", handleIncorrectAnswer);

    }
}

function handleCorrectAnswer()
{
    //alert("Correct!");
    result.textContent = "Correct! Great Job!";
    score++;
    attempts++;
    scoreTable.textContent = "Your Score: " + score + "/" + attempts;
}

function handleIncorrectAnswer()
{
    //alert("Incorrect!");
    result.textContent = "Incorrect. That was the flag of " + randomCountry.name + ".";
    attempts++;
    scoreTable.textContent = "Your Score: " + score + "/" + attempts;
    
}
