
// 2. Create a variable company as an object
let company = {
    name: `Dripu.`,
    yearly_revenue: 1100000,
    ceo: `Dale`,
    number_of_employees: 20,
    managers: [`Danny`, `Akon`, `Drake` ]

  };
  
  // 3. Create an if statement that will print a  message
  // containing the name of the company, ceo and number of employees
  // if the yearly_revenue of the company is greater than or equal to 1 million.
  if (company[`yearly_revenue`] >=1000000){
    console.log(`Congratulations to ${company[`name`]}, led by CEO ${company[`ceo`]}, for earning over 1 million in yearly revenue with ${company[`number_of_employees`]} employees!`);
  } else {
    // 4. Add an else statement that will print out a motivational message otherwise
    console.log(`Keep working hard, ${company[`name`]}! You will reach your financial goals with determination and persistence.`);
  }



  
  // 2. Create a while loop that will go through each manager and
  // console log their name
  let counter = 0;
  while (counter< company.managers.length) {
    console.log(company.managers[counter]);
    counter++;
  }
  
  // 3. Create a for loop that will go through each manager and
  // console log their name
  for (let j = 0; j < company.managers.length; j++) {
    console.log(company.managers[j]);
  }
  
  // 4. Modify the managers array to now be an array of objects instead
  // of an array of strings.
  company.managers = [
    { name: "Danny", salary: 100000, is_senior: true },
    { name: "Akon", salary: 80000, is_senior: false },
    { name: "Drake", salary: 120000, is_senior: true }
  ];
  
  // 6. Modify the above loops to now achieve the following:
  // 1. Console log the manager name
  // 2. Console log the manager salary
  // 3. Console log a nice message only if the manager is senior.
  for (const manager of company.managers) {
    console.log(manager.name);
    console.log(manager.salary);
    if (manager.is_senior) {
      console.log(`Congratulations, ${manager.name}! You're doing a great job as a senior manager.`);
    }
  }
  
  