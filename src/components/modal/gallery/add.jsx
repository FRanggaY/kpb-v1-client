import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate  } from 'react-router-dom';


function AddGalleryModal() {

    const navigate = useNavigate ();
    const [galleryInput, setGallery] = useState({
        image: '',
        title: '',
        // error_list: [],
    });
    
    const handleInput = (e) => {
        e.persist();
        setGallery({...galleryInput, [e.target.name]: e.target.value});
    }
    
    const gallerySubmit = (e) => {
        e.preventDefault();
    
        const data = {
            image: galleryInput.image,
            title: galleryInput.title,
        }
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.post('/api/gallery', data).then(res => {
                console.log(res.data);
                if(res.status === 200){
                    // localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message, "success");
                    // setGallery({ ...galleryInput, error_list: res.data.validation_errors })
                }
            }).catch(err => {
                swal("Warning", 'something wrong', "warning");
            })
            ;
        });
        
    }
    return (
        <div>
            <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
                Tambah Gallery
            </button>

            <div id="authentication-modal" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                <div class="relative px-4 w-full max-w-md h-full md:h-auto">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-end p-2">
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={gallerySubmit}>
                            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Add Gallery</h3>
                            <div>
                                <label for="title" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                                <input onChange={handleInput} value={galleryInput.title} type="name" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                {/* <span>{galleryInput.error_list.name}</span> */}
                            </div>
                            <div>
                                <label for="image" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                                <input onChange={handleInput} value={galleryInput.image} name="image" id="image" className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" type="file"/>
                                {/* <span>{galleryInput.error_list.password}</span> */}
                            </div>
                                
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default AddGalleryModal;