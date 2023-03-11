const api_url = 'https://upadhayay.github.io/db.json'
async function getTitle(){
    const response = await fetch(api_url);
    const data = await response.json();
    // const { id,title } = data;
    // const title1 = data.books[0]?.title
    // const title2 = data.books[1]?.title
    // const title3 = data.books[2]?.title
    // const title4 = data.books[3]?.title

    // console.log(data.books.length);
    // console.log(title4);


    let placeholder = document.querySelector("#papers-content-2");
    let out = "";
    for(let book of data.books){
        if(book.published == true){
            out += `
            <div class="papers-container" id="papers-container-2">
            
                <center>
                    <div class="paper">
                        <div class="paper-image"><img id="papers-img" src="images/research-paper.jpg" alt=""></div>
                        <div class="paper-title"><p id="paper-title-1" style="margin: 0;">${book.title}</p></div>
                        
                    </div>
                </center>
            </div>

        `;
        }
        
    }
    
    placeholder.innerHTML = out;

}
getTitle();
