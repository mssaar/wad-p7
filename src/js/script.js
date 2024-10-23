window.onload = function() {



    fetch('../../res/json/myjson.json') //  ../..   -lähen 2x tagasi
        .then((response) => response.json()) //Response on see,kus on status:200, body ning veel igast parameetrite väärtused. .json() loeb õigemale kujule
        .then(json => {
            console.log(json); //json on andmed,kus on 100 asja, iganäeb välja nt: {id:1, name:Aadu, title:suema, body:tahan süüa}
            
            for (let i=0; i < json.length; i++){ // Kordus, mis käib läbi kõik elemendid. 
                let div = document.createElement("div"); // Loob uue <div> elemendi.
                div.className = 'post'
                let h3 = document.createElement("h3");
                let p = document.createElement("p");
                
                h3.innerText = (json[i].title); //Võtame json'ist title'i ja salvestame muutujasse h3
                p.innerText = (json[i].body);

                div.appendChild(h3);
                div.appendChild(p);
                document.body.appendChild(div);
            }
        })
        .catch(err => { //Kui error, siis kuvab kasti (kuna post), kus "TypeError: Failed to fetch"
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            })
        .finally(() => { //Paneb igal juhul peale kõiki asju kuupäeva ja kellaaja 
                let footer = document.createElement("footer");
                date = new Date().toLocaleString()
                footer.innerText = date;
                document.body.appendChild(footer);
                })



}