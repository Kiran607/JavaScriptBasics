const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for each

companies.forEach(function (company) {
    console.log(company);
});

//Filter using for loop

let canFilter = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 21) {
        canFilter.push(ages[i]);
    }
}

console.log(canFilter);

//Filter 

let useFilter = ages.filter(function (age) {
    if (age >= 21) {
        return true;
    }
})

let useFilter = ages.filter(age => age >= 21);

console.log(useFilter);

//Filter for retail companies
const retailCompanies = companies.filter(function (company) {
    if (company.category === "Retail") {
        return true;
    }
})

const retailCompanies = companies.filter(company => company.category === "Retail");
console.log(retailCompanies);

//Filter for get 80 companies

const eightiesCompany = companies.filter(company => company.start < 1990);
console.log(eightiesCompany);

// Filter for get end year compaines 2000

const endCompanies = companies.filter(company => (company.start - company.end >= 10));
console.log(endCompanies);

//Map
const companyNames = companies.map(company => company.name);
console.log(companyNames);

const testMap = companies.map(company => `${company.name} [${company.start}-${company.end}]`);
console.log(testMap);

const agesSqrt = ages.map(age => Math.sqrt(age));
console.log(agesSqrt);

//Sort

const sortedCompany = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompany);

const sortAge = ages.sort((a, b) => a - b);
console.log(sortAge);

//reduce

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

const totalYears = companies.reduce(function (total, company) {
    return total + (company.end - company.start);
}, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);

//combained methods

const combained = ages.map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0);
console.log(combained);
