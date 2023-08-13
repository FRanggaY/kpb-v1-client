import React, { Fragment, useEffect, useState } from 'react';
import Sidebar from '../../../components/sidebar';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate  } from 'react-router-dom';
import { useParams } from "react-router";


function EditAdvertiseAdmin() {
    const [advertiseInput, setAdvertise] = useState([{
        title: '',
        link: '',
    }]);
    const navigate = useNavigate();{}
    let { id } = useParams();
    const [picture, setPicture] = useState([]);
    
    const handleInput = (e) => {
        e.persist();
        setAdvertise({...advertiseInput, [e.target.name]: e.target.value});
    }
    
    const handleImage= (e) => {
        setPicture({ image: e.target.files[0]});
    }

    useEffect(() => {
        axios.get(`/api/advertisement/${id}`).then(res => {
            if(res.status === 200){
                setAdvertise(res.data.data)
            // setPaginateList(res.data.data)
            }
        }).catch(err => {
            console.log(err.message);
            navigate('/admin/advertise');
        })
        ;
    },[]);


    
    const advertiseSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', advertiseInput.title);
        formData.append('link', advertiseInput.link);
        formData.append('image', picture.image);
    
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.post(`/api/advertisement/${id}`, formData, {
                headers: {
                    'x-http-method-override': 'patch'
                }
            }).then(res => {
                if(res.status === 200){
                    swal("Success", res.data.message, "success", {
                        button: false,
                    });
                    navigate('/admin/advertise');
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                    // setAdvertise({ ...advertiseInput, error_list: res.data.validation_errors })
                }
            }).catch(err => {
                swal("Warning", 'something wrong', "warning");
            })
            ;
        });
        
    }

    return (
        <Fragment>
            <main>
                <Sidebar />
                <div className="relative md:ml-64 bg-gray-100 md:pt-12 pb-32 pt-12">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-12/12 px-4">
                            <div className="text-center px-5 py-3whitespace-nowrap">
                                <h6 className="text-blueGray-700 text-xl font-bold">Advertise</h6>
                                <form encType="multipart/form-data" class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={advertiseSubmit}>
                                    <div>
                                        <label for="title" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                                        <input onChange={handleInput} value={advertiseInput.title}  type="name" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                    </div>
                                    <div>
                                        <label for="link" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Link</label>
                                        <input onChange={handleInput} value={advertiseInput.link}  type="name" name="link" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                    </div>
                                    <div>
                                        <label for="image" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                                        <input onChange={handleImage}  name="image" id="image" className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" type="file"/>
                                    </div> 
                                        
                                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )

    
}

export default EditAdvertiseAdmin;