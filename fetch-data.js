async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContaner= document.getElementById('api-data');
try{
  const response= await fetch(apiUrl);  
  if(!response.ok)
{
    throw new Event(`HTTP error! Status: ${response.status}`);
}

}
    
    
}