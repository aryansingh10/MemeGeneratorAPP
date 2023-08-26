window.onload = () => {
    const button = document.querySelector('button');
    const image = document.querySelector('.card-image img');
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');
  
    const updateDetails = (url, memeTitle, memeAuthor) => {
      image.setAttribute("src", url);
      title.textContent = memeTitle;
      author.textContent = `Meme by: ${memeAuthor}`;
    };
  
    const generateMeme = () => {
      fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data) => {
          updateDetails(data.url, data.title, data.author);
        });
    };
    generateMeme();
  
    button.addEventListener('click', () => {
      generateMeme();
    });
  };
  