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

}
 catch(Error){

 }

    
}