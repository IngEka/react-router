import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/AuthContext';
import { usePost } from '../../provider/PostContext';
import './AddPost.css'

const inicialValue = {
  id: '',
  title: '',
  content: '',
  author: '',
};

const AddPost = () => {

  const navegate = useNavigate()
  const { addPost } = usePost()
  const { error, setError, successMessagge, setSuccessMessagge} = useAuth();

  const [value, setValue] = useState(inicialValue);
  const {id, title, content, author } = value;
  
  
  const handleChange = (e) =>{
    const changeValue = {
      ...value,
      [e.target.name] : e.target.value,
    }
    setValue(changeValue)
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title.trim() === ''){
      setError('Completar campos obligatorios (titulo*)')
      return;
    }else if(content.trim() === ''){
      setError('Completar campos obligatorios (contenido*)')
      return;
    } else {
      addPost(value);  
      setSuccessMessagge("Agregado con exito")
      setError(null);
    }
    
    setTimeout(()=> {
      setSuccessMessagge(null)
      navegate('/blog');
  }, 2000);
   
  }
  const onCalcelar = () =>{
    navegate('/blog')
    /* post.setEdithPost(null) */
  } 

  return (
    <div className='content-add-post'>
      <h3 className='title-3'>Agregar un nuevo post</h3>
      { error && (<div> {error} </div>)
      }
      { successMessagge && (<div> {successMessagge} </div>)
      }

      <form onSubmit={handleSubmit} className='form'>
        <input 
          placeholder='Clave unica' 
          type='text'
          name='id'
          value={id}
          onChange={handleChange}/>
        <input 
          placeholder='Autor' 
          type='text'
          name='author'
          value={author}
          onChange={handleChange}/>
        <input 
          placeholder='Titulo*' 
          type='text'
          name='title'
          value={title}
          onChange={handleChange} />
        <textarea 
          className='text-area-contenido'
          placeholder='Contenido*'
          name='content'
          value={content}
          onChange={handleChange}>
        </textarea>
        <button>Guardar post</button>
        <button type='button' onClick={onCalcelar}>Cancelar</button>
      </form>
      
    </div>
  )
}

export default AddPost
