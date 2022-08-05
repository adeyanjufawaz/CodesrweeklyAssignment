            //  <!-------------   Excercise 1  ----------!>/

// 1.   Declare an empty array;
            let array = []

// 2.   Declare an array with more than 5 number of elements
            const arr = [1,2,true,{a:23},"Dollars",undefined,false,"Hello"]

// 3.   Find the length of your array
            let length = arr.length
            console.log(length)

// 4.   Get the first item, the middle item and the last item of the array
            let firstItem, middleItem, lastItem
            firstItem = arr[0], middleItem = arr[Math.ceil(arr.length/2)], lastItem = arr[arr.length - 1]
            console.log(firstItem,middleItem,lastItem)

// 5.   Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
            const show = [1,2,true,{a:23},"Dollars",undefined,false,"Hello",[2,1],201]
            length = show.length
            console.log(length)

// 6.   Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
            let company = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// 7.   Print the array using console.log()
            console.log(company)

// 8.   Print the number of companies in the array
            console.log(company.length)

// 9.   Print the first company, middle and last company
            firstCompany = company[0], middleCompany = company[Math.floor(company.length/2)], lastCompany = company[company.length - 1]
            console.log(firstCompany,middleCompany,lastCompany)

// 10.  Print out each company
            for (const each of company) {
                    console.log(each)
            }


// 11.  Change each company name to uppercase one by one and print them out
            for (const each of company) {
                console.log(each.toUpperCase())
            }

// 12.  Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.


// 13.  Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
            let companyName = "Facebook";
            function checker (nameOfCompany,array) {
                array.indexOf(nameOfCompany) !== -1 
                ? console.log(nameOfCompany) 
                : console.log("Country not found")
            }
            checker(companyName,company)
// Filter out companies which have more than one 'o' without the filter method
console.log("Facebook".match(/o/gi));
console.log(company);

let newArrr = company.map((cur,ind,arr)=>{
    let check = cur.match(/o/g)
    console.log(check);
    console.log(cur)
    
})

// Sort the array using sort() method
    console.log(company.sort());
// Reverse the array using reverse() method
    console.log(company.reverse())
// Slice out the first 3 companies from the array
    console.log(company.slice(0,3));
// Slice out the last 3 companies from the array
    console.log(company.slice(-3));
// Slice out the middle IT company or companies from the array
       console.log(company.slice(Math.floor(company.length/2),Math.floor(company.length/2)+1))
// Remove the first IT company from the array
        // console.log(company.shift());
        console.log(company)
// Remove the middle IT company or companies from the array
        let middleIt = Math.floor(company.length/2)
        let newcompanys = []
        company.forEach((cur,ind,arr)=>{
            if (ind !== middleIt) {
                newcompanys.push(cur)
            } 
        })
        console.log(newcompanys);
        
// Remove the last IT company from the array
        console.log(company.pop());
// Remove all IT companies
        console.log(company.slice(-1,0));


            //  <!-------------  Excercise 2 ----------!>

        /*
            First remove all the punctuations and change the string to array and count the number of words in the array
            
            let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
            console.log(words)
            console.log(words.length)
            ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
            13
        */

            let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
            let textTo__Arr = text.split(" ") 
            console.log(textTo__Arr)
            console.log(textTo__Arr.length)

        // In the following shopping cart add, remove, edit items
        
        // const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
        // add 'Meat' in the beginning of your shopping cart if it has not been already added
        // add Sugar at the end of you shopping cart if it has not been already added
        // remove 'Honey' if you are allergic to honey
        // modify Tea to 'Green Tea'
        const shoppingCart = ['Milk', 'Coffee','Tea','Honey',"Mango"]
        if (shoppingCart.indexOf("Meat") === -1) {
            shoppingCart.push("Meat")
        }
        if (shoppingCart.indexOf("Sugar") === -1) {
            shoppingCart.unshift("Sugar")
        }
        let indexOfTea = shoppingCart.indexOf("Tea")
        shoppingCart[indexOfTea] = "Green Tea"
        
        console.log(shoppingCart);

        // In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
            countries = [
                'Albania',
                'Bolivia',
                'Canada',
                'Denmark',
                'Ethiopia',
                'Finland',
                'Germany',
                'Hungary',
                'Ireland',
                'Japan',
                'Kenya',
                "Nigeria",
                "Libya",
                "Morocco",
                "Indonesia",
                "Cameroon"
            ]
            countries.indexOf("Ethiopia") == -1 ? countries.push("Ethiopia") : console.log("Ethiopia");
        
        // In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
            const webTechs = [
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'Redux',
                'Node',
                'MongoDB'
            ]
            webTechs.indexOf("Sass") == -1 ? webTechs.unshift("Sass") : console.log('Sass is a CSS preprocess');
            console.log(webTechs);
        // Concatenate the following two variables and store it in a fullStack variable.
        
        // const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
        // const backEnd = ['Node','Express', 'MongoDB']
            const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
            const backEnd = ['Node','Express', 'MongoDB']
            const fullStack = frontEnd.concat(backEnd)
        // console.log(fullStack)
            console.log(fullStack)
        // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]






// Exercise: Level 3
    // 1.The following is an array of 10 students ages:
        // const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
        // Sort the array and find the min and max age
        // Find the median age(one middle item or two middle items divided by two)
        // Find the average age(all items divided by number of items)
        // Find the range of the ages(max minus min)
        // Compare the value of (min - average) and (max - average), 
        // use abs() method 1.Slice the first ten countries from the countries array


        const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
        let sortAges = ages.sort((x,y)=>x-y)
        console.log(sortAges)  
        let min = sortAges[0]
        let max = sortAges[sortAges.length - 1]
        
        // Sort the array and find the min and max age
        console.log(min,max)

        // The median numbers is/are ;
        let median = sortAges.length / 2
        if(sortAges.length % 2 == 0){
            let firstMedian = Math.floor(median-1)
            let secondMedian = Math.floor(median)
            console.log(sortAges[firstMedian], sortAges[secondMedian])
        } else{
            median = Math.floor(median)
            console.log(sortAges[median-1])
        }

        // The average age is:
        let average;
        let sum = 0;
        for (const eachItem of ages) {
            sum += eachItem
        }
        average = sum/ages.length
        console.log(Math.round(average))

        // The range is;
        let range = max - min
        console.log(range)

        
    // 2. Find the middle country(ies) in the countries array
    countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya',
        "Nigeria",
        "Libya",
        "Morocco",
        "Indonesia",
        "Cameroon"
    ]
    median = countries.length / 2
        if(countries.length % 2 == 0){
            let firstMedian = Math.floor(median-1)
            let secondMedian = Math.floor(median)
            console.log(countries[firstMedian], countries[secondMedian])
        } else{
            median = Math.floor(median)
            console.log(countries[median-1])
        }

    // 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

    let country = ["Nigeria","India","Peru","England","Ghana" ]
    let halfOf__country = Math.ceil(country.length / 2)
    console.log(halfOf__country)
    let firstHalfOf__Country;
    let lastHalfOf__Country;
    console.log(country.length)
    if (country.length % 2 == 0) {
        firstHalfOf__Country = country.splice(0,halfOf__country)
        lastHalfOf__Country = country.splice(-halfOf__country)
        console.log(firstHalfOf__Country,lastHalfOf__Country)
    } else {
        firstHalfOf__Country = country.splice(0,halfOf__country)
        lastHalfOf__Country = country.splice(-halfOf__country)
        firstHalfOf__Country.push("Libya")
        console.log(firstHalfOf__Country,lastHalfOf__Country)
    }


