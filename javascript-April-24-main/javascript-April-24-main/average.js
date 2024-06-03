const people = [
    {
      name: "John",
      age: 22,
      ethnicity: "Luhya",
      gender: "Male",
    },
    {
      name: "Jane",
      age: 62,
      ethnicity: "Kalenjin",
      gender: "Female",
    },
    {
      name: "Kennedy",
      age: 59,
      ethnicity: "Meru",
      gender: "Male",
    },
    {
      name: "Esther",
      age: 50,
      ethnicity: "Luo",
      gender: "Female",
    },
    {
      name: "Bernard",
      age: 25,
      ethnicity: "Mijikenda",
      gender: "Male",
    },
    {
      name: "Joseph",
      age: 27,
      ethnicity: "Luhya",
      gender: "Male",
    },
    {
      name: "Sarah",
      age: 20,
      ethnicity: "Kalenjin",
      gender: "Female",
    },
    {
      name: "Sarah",
      age: 43,
      ethnicity: "Kalenjin",
      gender: "Female",
    },
    {
      name: "David",
      age: 33,
      ethnicity: "Kikuyu",
      gender: "Male",
    },
    {
      name: "James",
      age: 31,
      ethnicity: "Kisiĩ",
      gender: "Male",
    },
    {
      name: "Peter",
      age: 29,
      ethnicity: "Mijikenda",
      gender: "Male",
    },
    {
      name: "Catherine",
      age: 37,
      ethnicity: "Mijikenda",
      gender: "Female",
    },
    {
      name: "Michael",
      age: 34,
      ethnicity: "Kisiĩ",
      gender: "Male",
    },
    {
      name: "Sarah",
      age: 52,
      ethnicity: "Embu",
      gender: "Female",
    },
    {
      name: "Esther",
      age: 31,
      ethnicity: "Mijikenda",
      gender: "Female",
    },
    {
      name: "John",
      age: 55,
      ethnicity: "Luo",
      gender: "Male",
    },
    {
      name: "David",
      age: 44,
      ethnicity: "Kikuyu",
      gender: "Male",
    },
    {
      name: "Daniel",
      age: 20,
      ethnicity: "Kisiĩ",
      gender: "Male",
    },
    {
      name: "Joseph",
      age: 28,
      ethnicity: "Kalenjin",
      gender: "Male",
    },
    {
      name: "Peter",
      age: 26,
      ethnicity: "Meru",
      gender: "Male",
    },
  ];

  //find average age by ethnicity
  let sortedAge=((a,b)=>b.age-a.age)
  

  function getAverageByEthnicity(people){
     const population ={}
     const totalages={}
     let groups =[]   
   


    for(let index=0 ;index<people.length; index++){
        let ethnicity=people[index].ethnicity
        let age=people[index].age
        if(groups.includes(people[index].ethnicity)){
            population[ethnicity]=population[ ethnicity]+1
            totalages[ethnicity]=totalages[ethnicity]=age
        }else{
            groups.push(ethnicity)
            population[ethnicity]=1
            totalages[ethnicity]=age
        }
    }
    groups.forEach(group=>{
        console.log(`The Average age for ${group} community is ${totalages[group]/population[group]}` );
    })
    console.log(totalages);
    console.log(population);
  }
  getAverageByEthnicity(people)