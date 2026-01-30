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

// Problem 9: Race two Fetch Requests
// Description:
// Starts multiple fetch requests at the same time and resolves
// with the result of the request that finishes FIRST.
// The slower request is ignored.
// If the first settled promise rejects, the entire operation fails.
//
// Concepts:
// Promise.race()
// Promise settlement (resolve vs reject)
// Async error handling with try/catch

async function fetchFirst(id1, id2) {
    try {
        const fetch1 = fetch(`https://jsonplaceholder.typicode.com/users/${id1}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Request for first user failed");
                }
                return response.json();
            });

        const fetch2 = fetch(`https://jsonplaceholder.typicode.com/users/${id2}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Request for second user failed");
                }
                return response.json();
            });

        const winner = await Promise.race([fetch1, fetch2]);

        return `Winner: ${winner.name} (ID: ${winner.id})`;

    } catch (error) {
        console.error("Promise.race failed:", error.message);
    }
}




// =================== TEST ===================

async function runTest()
{
    const fetchUserResult = await fetchUser(2);
    console.log(fetchUserResult);

    const fetchMultipleUsersResult = await fetchMultipleUsers([1, 2, 3]);
    console.log(fetchMultipleUsersResult);

    const fetchFirstResult = await fetchFirst(1,2);
    console.log(fetchFirstResult);
}


runTest();