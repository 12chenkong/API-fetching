let i=1;
function fethExternalAPI(urlPath,dom) {
  let users = [];
  const test = fetch(`https://api.itbook.store/1.0/search/${urlPath}/${i}`)
    .then((response) => response.json())
    .then((json) => {
      users = json;
      books = users.books;
      console.log(books);
      let html = " ";
      books.forEach((element) => {
        console.log(element);
        console.log(element.price);
        console.log(element.image);
        html += `
          <div
          class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-6"
        >
          <div
            class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
          >
            <img src="${element.image}" alt=""> </div>
          <div class="p-6">
            <h5
              class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
             ${element.title}
            </h5>
            <p
              class="block font-sans text-base font-light leading-relaxed text-inherit antialiased"
            >
             ${element.subtitle}
            </p>
          </div>
          <div class="p-6 pt-0">
           <a href="${element.url} "  target="_blank">
            <button
              data-ripple-light="true"
              type="button"
              class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              
            >
            
              Read More
            </button>
             </a>
          </div>
        </div>
        `;
      });

      document.querySelector(`.${dom}`).innerHTML = html;
    })
    .catch((error) => console.log(error));
}
fethExternalAPI("mongodb","js-wrapper");
fethExternalAPI("java", "js-java-wrapper");
