const myNameAndCampus = {
    name: "Lansot",
    firstname: "Kevin",
    campus: "Remote"
}
console.log(myNameAndCampus.name);

module.exports = {
    name: myNameAndCampus.name,
    firstname: myNameAndCampus.firstname,
    campus: myNameAndCampus.campus
}