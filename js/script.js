
function userForm() 
{
    // Get form values
    const FirstName = document.getElementById("First Name").value;
    const LastName = document.getElementById("Last Name").value;
    const email = document.getElementById("Email").value;
    const Address = document.getElementById("Address").value;
    const City = document.getElementById("City").value;
    const Province = document.getElementById("Province").value;
    const Membership = document.querySelector('input[name = "Membership"]:checked').value;

    // Display the information below the form
    const outputUser = document.getElementById("output");
    outputUser.innerHTML = 
    `
        <h2>Submitted Information:</h2>
        <p><strong>First Name:</strong> ${FirstName}</p>
        <p><strong>Second Name:</strong> ${LastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${Address}</p>
        <p><strong>City:</strong> ${City}</p>
        <p><strong>Province:</strong> ${Province}</p>
        <p><strong>Membership:</strong> ${Membership}</p>
    `;
}


function RESET()
{
    const reset = document.getElementById("Reset").value;
    const outputUser = document.getElementById("output");
    outputUser.innerHTML = 
    ` <p>${reset}<p>`
}

function MyExcelFuns() {
    const NumberStr = document.getElementById("Numbers").value;
    const outputUser = document.getElementById("output");

    // Step 1: Check if the input is empty or only contains spaces
    if (NumberStr.trim() === "") {
        alert("Enter values using the correct format");
        outputUser.innerHTML = `<h2>Enter values with the correct format</h2>`;
        return; // Exit the function since there's nothing to process
    }

    // Step 2: Split the input string into an array of numbers
    const numberArr = NumberStr.split(" ");
    
    // Step 3: Create a new array containing only numbers
    const finalNumericArray = [];

    for (let i = 0; i < numberArr.length; i++) {
        // Remove spaces in case there are multiple spaces between numbers
        const number = numberArr[i].trim();
        
        // Convert each numeric value from string to number data type
        const parsedNumber = parseFloat(number);

        // Check if the parsedNumber is a valid number (not NaN)
        if (!isNaN(parsedNumber)) {
            finalNumericArray.push(parsedNumber);
        }
    }

    // Now you have finalNumericArray containing only numbers with no spaces

    // You can perform calculations on finalNumericArray, e.g., finding total, max, min, or length

    const calculations = document.querySelector('input[name = "Calculus_Function"]:checked').value;
    
    let total = 0;

    for(let i = 0; i< finalNumericArray.length;i++)
    {
        total += parseFloat(finalNumericArray[i]);
    }
    
    if(calculations == "AutoSum")
    {
        const sum = finalNumericArray.reduce((acc, val) => acc + val, 0);
        outputUser.innerHTML = 
        `
        <p><strong>Sum:</strong> ${sum}</p>`;

    }
    if(calculations == "Average")
    {
        const average = total/finalNumericArray.length;
        outputUser.innerHTML = 
        `
        <p><strong>Average:</strong> ${average}</p>`;

    }

    if(calculations == "Max")
    {
        let max = finalNumericArray[0];
        for(let i = 0;i< finalNumericArray.length;i++)
        {
            if(max<finalNumericArray[i])
            {
                max = finalNumericArray[i];
            }
        }

        outputUser.innerHTML = 
        `
        <p><strong>Max:</strong> ${max}</p>`;
    }

    if(calculations == "Min")
    {
        let min = finalNumericArray[0];
        for(let i = 0;i< finalNumericArray.length;i++)
        {
            if(min>finalNumericArray[i])
            {
                min = finalNumericArray[i];
            }
        }

        outputUser.innerHTML = 
        `
        <p><strong>Min:</strong> ${min}</p>`;
    }


}

const themeHeading = document.getElementById('theme-heading');
const toggleThemeButton = document.getElementById('toggle-theme');
const toggleBlueRedButton = document.getElementById('toggle-Blue-Red');
const personalToggleButton = document.getElementById('Personal-Toggle');

// Variables pour suivre les états des thèmes
let isLightTheme = true;
let isBlueTheme = false;
let isPinkTheme = false;

// Function to toggle the theme
function toggleTheme() 
{
    document.body.classList.remove('green-theme');
    document.body.classList.remove('pink-theme');
    document.body.classList.remove('red-theme');
    document.body.classList.remove('blue-theme');
    if (isLightTheme) 
    {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        isLightTheme = false;
    } 
    else 
    {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        isLightTheme = true;
    }

    // I put that so we start always by white and after dark when we switch from one button to an other button. So, it's easier for a the user
    isPinkTheme = false;
    isBlueTheme = false;
}

function BlueRedToggle() 
{
    document.body.classList.remove('green-theme');
    document.body.classList.remove('pink-theme');
    document.body.classList.remove('dark-theme');
    document.body.classList.remove('light-theme');   

    if (isBlueTheme) 
    {
        document.body.classList.add('red-theme');
        document.body.classList.remove('blue-theme');
        isBlueTheme = false;
    } 
    else 
    {
        document.body.classList.add('blue-theme');
        document.body.classList.remove('red-theme');
        isBlueTheme = true;
    }

    // I put that so we start always by blue and after red when we switch from one button to an other button. So, it's easier for a the user
    isLightTheme = false;
    isPinkTheme = false;
}

function PersonalToggle() 
{
    document.body.classList.remove('light-theme');
    document.body.classList.remove('dark-theme');
    document.body.classList.remove('red-theme');
    document.body.classList.remove('blue-theme');

    if (isPinkTheme) 
    {
        document.body.classList.add('green-theme');
        document.body.classList.remove('pink-theme');
        isPinkTheme = false;
    } 
    else 
    {
        document.body.classList.add('pink-theme');
        document.body.classList.remove('green-theme');
        isPinkTheme = true;
    }

    // I put that so we start always by pink and after green when we switch from one button to an other button. So, it's easier for a the user
    isLightTheme = false;
    isBlueTheme = false;
}



