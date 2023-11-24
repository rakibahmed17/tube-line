const categoryLoad = async () => {
                  const res = await fetch("https://openapi.programming-hero.com/api/videos/categories") 
                  const data = await res.json();
                  const allData = data.data;
                  // console.log(allData);
                  

                  const buttonContainer = document.getElementById('button-container')
                  allData.slice(0,4).forEach(category => {
                                    const div = document.createElement("div");
                                    div.innerHTML = `
                                     <button onclick="cardLoad('${category.category_id}')" class="btn">${category.category
                                     }</button>
                                   
                                    `
                                    buttonContainer.appendChild(div);
                  });


}
const cardLoad = async (category_id) => {
                  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`)
                   const displayData = await res.json();
                  const categoryData = displayData.data;
                 
                  // console.log(categoryData);
                  const cardContainer = document.getElementById('card-container');
                  cardContainer.innerHTML = "";
                  categoryData.forEach((card) => {
                                    const div = document.createElement('div');
                                    div.classList='w-60 h-auto  ml-6 p-6 front-bold'
                                    div.innerHTML = `
                                    <div>
          <div class= >
            <figure>
              <img
                src=${card?.thumbnail}
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2>${card.title}</h2>
              <p>${card?.others.views}:${card.posted_date}</p>
         <div class=" flex justify-center gap-2" >       
          <img class="rounded-full w-1/4"
          src=${card?.authors[0]?.profile_picture}
       />
          <span> ${card.authors[0]?.profile_name} </span>
        </div>
            </div>
          </div>
        </div>    `
                                    cardContainer.appendChild(div);
                                  
                  });
                  
                             
                  
}

categoryLoad();
cardLoad('1000');
cardLoad('1000');

cardLoad('1001');
cardLoad('1003');
cardLoad('1005');