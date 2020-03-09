var m_height,m_mass,j_height,j_mass;
m_mass = Number(prompt("Mark please enter your Mass"));
m_height = Number(prompt("Mark please enter your height"));
j_mass = Number(prompt("Mark please enter your Mass "));
j_height = Number(prompt("Mark please enter your height"));

var m_BMI = m_mass / Math.pow(m_height,2);
var j_BMI = j_mass / Math.pow(j_height,2);

var isTrue = m_BMI > j_BMI ;
console.log("Is Mark's BMIhigher than John's? " + isTrue );