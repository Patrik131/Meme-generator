import { useState, useEffect } from 'react'
import './App.css'
/*
function App() {
  const [allMemes, setAllMemes] = useState()
  useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes")
      const memesData = await response.json()
      console.log(memesData)
      setAllMemes(memesData)
    }
    fetchData().catch(console.error)
  }, [])

  
  const [text, setText] = useState({
    topText:"",
    bottomText:""
  })
  const [imageUrl, setImageUrl] = useState("https://i.imgflip.com/21tqf4.jpg")


  function dohvatiMeme() {
    let randomIndex = Math.floor(Math.random() * allMemes.data.memes.length)
    const memeImage = allMemes.data.memes[randomIndex].url
    console.log(memeImage)
    setImageUrl(memeImage)
  }

  function handleChange(event) {
    const {name, value} = event.target
    setText(prev => ({...prev, [name]:value}))
  }

  return (
    <>
      <div className="card">
        <div className="container">
          <div className="grid">
            <div className="div1">
              <input 
                type="text"
                name="topText"
                onChange={handleChange}
                value={text.topText}
              />

            </div>
            <div className="div2">
              <input 
                  type="text" 
                  name="bottomText"
                  onChange={handleChange}
                  value={text.bottomText}
                />
            </div>
            <div className="div3">
              <button onClick={dohvatiMeme}>Dohvati novi meme.</button>
            </div>
          </div>
          <div className="image-container">
            <div className="topText">{text.topText}</div>
            <div className="bottomText">{text.bottomText}</div>
            <img src={imageUrl} alt="" />
          </div>
          
        </div>

      </div>
      <div></div>
    </>
  )
}

export default App
 */


// ... (your existing imports)

function App() {
  const [allMemes, setAllMemes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const memesData = await response.json();
        setAllMemes(memesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [text, setText] = useState({
    topText: "",
    bottomText: "",
  });
  const [imageUrl, setImageUrl] = useState("https://i.imgflip.com/21tqf4.jpg");

  function dohvatiMeme() {
    let randomIndex = Math.floor(Math.random() * allMemes?.data.memes.length);
    const memeImage = allMemes?.data.memes[randomIndex]?.url;
    setImageUrl(memeImage);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setText((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="card">
      <div className="container">
        <div className="grid">
          <div className="div1">
            <input
              type="text"
              name="topText"
              onChange={handleChange}
              value={text.topText}
              placeholder="Text that goes on the top"
            />
          </div>
          <div className="div2">
            <input
              type="text"
              name="bottomText"
              onChange={handleChange}
              value={text.bottomText}
              placeholder="Text that goes on the bottom"
            />
          </div>
          <div className="div3">
            <button onClick={dohvatiMeme}>Dohvati novi meme.</button>
          </div>
        </div>
        <div className="image-container">
          <div className="topText">{text.topText}</div>
          <div className="bottomText">{text.bottomText}</div>
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
