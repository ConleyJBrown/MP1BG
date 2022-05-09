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
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democractic Republic of the Congo",
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

console.log(countries);

let randomCountry = countries[Math.floor(Math.random()*countries.length)];

console.log(randomCountry);


let image = document.getElementsByClassName("flagImage")[0];
image.src = randomCountry.imageSource;