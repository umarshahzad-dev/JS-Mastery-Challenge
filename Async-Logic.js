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

// Problem 8: Fetch Multiple Users in Parallel
// Description:
// Takes an array of user IDs and fetches all users simultaneously.
// The function should resolve only if ALL requests succeed.
// If ANY request fails, the entire operation should fail.
// 
// Concepts:
// Promise.all()
// Parallel async execution
// Error propagation
// API data aggregation

async function fetchMultipleUsers(ids) {

    try {
        const fetchPromises = ids.map(async (i) => 
        {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${i}`);
            if(!response.ok)
            {
                throw new Error("Failed to fetch Users.");
            }
            return response.json();
        });
    const users = await Promise.all(fetchPromises);

    return users.map(obj => obj.name);

    } catch (error) {
        console.error(error);
    }
}


// =================== TEST ===================

async function runTest()
{
    const fetchUserResult = await fetchUser(2);
    console.log(fetchUserResult);

    const fetchMultipleUsersResult = await fetchMultipleUsers([1, 2, 3]);
    console.log(fetchMultipleUsersResult);
}


runTest();