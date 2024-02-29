/* The FIND method of Array instances returns the first element in the provided array that satisfies the provided 
testing function. If no values satisfy the testing function, undefined is returned */

const companies = [
  { id: 1, shortname: "Sammy", employes: 11 },
  { id: 1, shortname: "Google", employes: 10 },
  { id: 2, shortname: "HTC", employes: 20 },
];

const findCompany = companies.find((index) => index.employes >= 10);

if (!findCompany) {
  console.log("Company not found");
} else {
  console.log(findCompany);
}
// expect output { id: 1, shortname: 'Sammy', employes: 11 }
