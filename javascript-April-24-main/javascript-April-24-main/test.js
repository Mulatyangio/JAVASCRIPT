function filterByGroup(ethnic_group) {
    // Assuming there's an array of objects representing people with their ethnicities
    var people = [
        { name: "John", ethnicity: "Kalenjin" },
        { name: "Mary", ethnicity: "Kikuyu" },
        { name: "Jane", ethnicity: "Kalenjin" },
        { name: "David", ethnicity: "Luo" }
    ];

    // Filter people by the given ethnic group
    var filteredPeople = people.filter(person => person.ethnicity === ethnic_group)
                               .map(person => person.name);

    // If there are people from the ethnic group, return the list
    if (filteredPeople.length > 0) {
        return filteredPeople;
    } else {
        // Log a message if no people from the input ethnic group are found
        console.log("There are no people from the " + ethnic_group + " ethnic group.");
        return null;
    }
}

// Example usage:
var kalenjinPeople = filterByGroup("Kalenjin");
if (kalenjinPeople) {
    console.log("People from Kalenjin ethnic group:", kalenjinPeople);
}
