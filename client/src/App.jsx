import { useEffect, useRef, useState } from 'react'
import { uploadFile } from './services/api';
import './App.css'




function App() {

  const [file,setFile] = useState('');

  const fileInputRef= useRef();

  const [result,setResult] = useState('');

  useEffect(()=>{
    const getImage=  async ()=>{
      if(file) {
        const data= new FormData();
        data.append("name",file.name);
        data.append("file",file);

         let response = await uploadFile(data);
         setResult(response.path);
      }

    }
    getImage();
  },[file])

  const onUploadClick= ()=>{
    fileInputRef.current.click();
  }


  console.log(file);

  return (
    <div className='container'>

      <img src="pic.jpg" alt="" />
      <div className='wrapper'>
        <h2 className='heading'>File Sharing Application</h2>
        <p>upload and share the downloaded link</p>
          <button className='btn' onClick={()=>{onUploadClick()}}>upload</button>
        
          <input type="file" 
          ref={fileInputRef} 
          style={{display : "none"}} 
          onChange = {(e)=> {setFile(e.target.files[0])}} 
          />
      <a href={result} target="_blank">{result}</a>
        
      </div>
    </div>
  )
}

export default App
