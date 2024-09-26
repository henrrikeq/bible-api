// document.getElementById('fetch-btn').addEventListener('click', async () => {
//     const book = document.getElementById('book').value;
//     const chapterId = document.getElementById('chapter').value;

//     const url = `https://bible-search.p.rapidapi.com/books-by-name/chapter?bookName=${book}&chapterId=${chapterId}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Host': 'bible-search.p.rapidapi.com',
//             'X-RapidAPI-Key': 'https://bible-search.p.rapidapi.com/books-by-name/chapter?bookName=John&chapterId=3' // Replace with your actual API key
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         displayResult(data);
//     } catch (error) {
//         document.getElementById('result').innerHTML = 'Error fetching data';
//     }
// });

// function displayResult(data) {
//     const resultDiv = document.getElementById('result');
//     resultDiv.innerHTML = '';
//     if (data && data.verses) {
//         data.verses.forEach(verse => {
//             const p = document.createElement('p');
//             p.textContent = `${verse.number}: ${verse.text}`;
//             resultDiv.appendChild(p);
//         });
//     } else {
//         resultDiv.innerHTML = 'No verses found';
//     }
// }


document.getElementById('fetch-btn').addEventListener('click', fetchChapter);

async function fetchChapter() {
    const url = "https://bible-search.p.rapidapi.com/books-by-name/chapter?bookName=John&chapterId=3";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'bible-search.p.rapidapi.com',
            'X-RapidAPI-Key': 'a91feda1e3msh48b7cc709c40054p1abcadjsn2f18a7fc782e' // Replace with your actual API key
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayResult(data);
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error fetching data: ' + error.message;
    }
}

function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results
    if (data && data.verses) {
        data.verses.forEach(verse => {
            const p = document.createElement('p');
            p.textContent = `${verse.number}: ${verse.text}`;
            resultDiv.appendChild(p);
        });
    } else {
        resultDiv.innerHTML = 'No verses found';
    }
}

// Fetch the chapter on page load
fetchChapter();