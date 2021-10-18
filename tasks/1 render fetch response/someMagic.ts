 const url = 'https://jsonplaceholder.typicode.com/posts';
 const main = document.querySelector('main')!;
 
 const getJSON = async <T>(config: { url: string }): Promise<T> => {
 
    const fetchConfig = ({ method: 'GET' });
    const response = await fetch(config.url, fetchConfig);
     const result: T = await response.json();
   
     return result 
   }


 // 
 interface Posts  {
     id: number;
     title: string;
     body: string;
     userId: number;
 }
 

 getJSON<Posts[]>({ url })
   .then((res: Posts[]) => {
      console.log( typeof res);
    //craate DOM elements
    main.innerHTML = res.map(el=>`
    <div class="post ${el.id}">
    <h1>${el.id}. ${el.title}</h1>
    ${el.body}
    </div>`)
    .join(' ') 
  
 
   }).catch(e=>
    main.innerHTML =`<div class="post">
    <h1>Error: something went wrong</h1>
   
    </div>` )

   

