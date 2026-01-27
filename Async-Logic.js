// =================== ASYNC LOGIC ===================
// 
// Problem 7: Fetch User Data from API
// Description: Fetches user data by ID and returns a formatted string
// Concepts: async/await, fetch API, try/catch, object destructuring
async function fetchUser(id) 
{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if(!response.ok)
        {
            throw new Error("User not found");
        }

        const data = await response.json();

        const { name } = data;
        const { email } = data;
        const { city } = data.address;

        return `User: ${name}, Email: ${email}, City: ${city}`;
        
    } catch (error) {
        console.error(error);
    }
}


// =================== TEST ===================

async function runTest()
{
    const result = await fetchUser(2);
    console.log(result);
}


runTest();