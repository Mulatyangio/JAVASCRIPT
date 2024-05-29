const hospital = {
    name: "Community Hospital",
    age: 89,
    address: {
      street: "123 Main Street",
      city: "Anytown",
      state: "State",
      zip: "12345",
    },
    departments: [
      {
        name: "Emergency",
        headDoctor: {
          name: "Dr. Smith",
          specialty: "Emergency Medicine",
          age: 45,
          isBoardCertified: true,
        },
      },
      {
        name: "Pediatrics",
        headDoctor: {
          name: "Dr. Johnson",
          specialty: "Pediatrics",
          age: 55,
          isBoardCertified: true,
        },
      },
    ],
    contactInfo: {
      phone: "555-123-4567",
      email: "info@communityhospital.com",
      website: "http://www.communityhospital.com",
    },
  };
  
  console.log(hospital);
  // Test 1: Access the name of the hospital
  console.log( hospital.name);
  // Test 2: Access the street address of the hospital

  // Test 3: Access the name of the head doctor of the Emergency department

  // Test 4: Access the email of the hospital
  
  // Test 5: Access the specialty of the head doctor of the Pediatrics department
