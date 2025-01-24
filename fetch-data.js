async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
try{
  const response= await fetch(apiUrl);  
  if(!response.ok)
{
    throw new Error(`HTTP error! Status: ${response.status}`);
    
}
const users = await response.json();

dataContainer.innerHTML = '';
const userList =document.createElement('li');

users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = user.name; // Set the user name
    userList.appendChild(listItem); // Add the list item to the list
});
}
 catch(error){

    dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
 }
 document.addEventListener('DOMContentLoaded', fetchUserData);

    
}