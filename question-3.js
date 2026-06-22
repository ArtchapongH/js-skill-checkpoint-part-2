// เริ่มเขียนโค้ดตรงนี้
async function getProducts() {
    try {
       
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const datas = await response.json(); 
            const result = await datas.filter((data)=>data.name.length>17).map((data)=>(data.name));
            console.log(result)

       } catch (error) {

            console.log('Something went wrong:', error.message);
       
        }
  }
  
getProducts();

