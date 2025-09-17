const loadLessons = ()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=> res.json())
    .then(data=> displayLessons(data.data))

}

const loadLevelWord = (id)=>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayLevelWord(data.data))
}

const displayLevelWord = (words)=>{
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";
    if(words.length === 0){
        return wordContainer.innerHTML = `
        <div class="text-center col-span-full">
          <img class="mx-auto" src="./assets/alert-error.png" alt="">
          <h4 class="text-lg font-medium text-gray-400">Not any vocabulay added</h4>
          <h2 class="text-2xl font-bold text-gray-700">Go to next lesson</h2>
        </div>
        `;
    }

    for(let word of words){
       const card = document.createElement("div");
       console.log(word);
       card.innerHTML = `
       <div class="card bg-base-100  shadow-sm text-center">
        <div class="card-body">
            <h2 class="text-xl font-semibold text-center">${word.word? word.word: "Not Found" }</h2>
            <p>Meaning/Pronounciation</p>
            <h2 class="text-xl font-semibold text-center font-bangla">${word.meaning ? word.meaning: "Not Found"}/${word.pronunciation? word.pronunciation: "Not Found" }</h2>
            <div class="card-actions justify-between">
                <button class="btn btn-primary"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn btn-primary"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
    </div>
       `
       wordContainer.append(card);

    }
}

const displayLessons = (lessons)=>{
    // 1. get the container and empty it
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    // 2. get into every lesson and create a div
    for(let lesson of lessons){
      // 3. create element 
      
      const btnDiv = document.createElement("div");
      btnDiv.innerHTML = `
      
     <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
       <i class="fa-solid fa-book-open"></i>
       Lesson - ${lesson.level_no}</button>
                
      `
       // 4. append into container
       levelContainer.appendChild(btnDiv)
    }
}

loadLessons()