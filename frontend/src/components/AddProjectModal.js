import React, { Fragment, memo, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import BtnPrimary from './BtnPrimary'
import BtnSecondary from './BtnSecondary'
import axios from "axios"
import toast from 'react-hot-toast'

const AddProjectModal = ({ isModalOpen, closeModal, edit = false, id = null }) => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('');

    useEffect(() => {
        if (edit && isModalOpen) {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/project/${id}`)
                .then((res) => {
                    setTitle(res.data[0].title)
                    setDesc(res.data[0].description)
                })
                .catch((error) => {
                    toast.error('Something went wrong')
                })
        }
    }, [isModalOpen]);


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!edit) {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/project/`, { title, description: desc })
                .then((res) => {
                    closeModal()
                    const customEvent = new CustomEvent('projectUpdate', { detail: { ...res.data } });
                    document.dispatchEvent(customEvent);
                    toast.success('Project created successfully')
                    setTitle('')
                    setDesc('')
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        toast.error(error.response.data.details[0].message)
                    } else {
                        toast.error('Something went wrong')
                    }
                })
        } else {
            axios.put(`${process.env.REACT_APP_BACKEND_URL}/project/${id}`, { title, description: desc })
                .then((res) => {
                    closeModal()
                    const customEvent = new CustomEvent('projectUpdate', { detail: { ...res.data } });
                    document.dispatchEvent(customEvent);
                    toast.success('Project updated successfully')
                    setTitle('')
                    setDesc('')
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        toast.error(error.response.data.details[0].message)
                    } else {
                        toast.error('Something went wrong')
                    }
                })
        }

    }

    return (
        <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as='div' open={isModalOpen} onClose={closeModal} className="relative z-50">
          <div className="fixed inset-0 overflow-y-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-purple-200/30" />
            </Transition.Child>
  
            <div className="fixed inset-0 flex items-center justify-center p-4 w-screen h-screen">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="rounded-lg bg-purple-50 shadow-xl w-full max-w-md lg:max-w-3xl mx-auto">
                  {/* Modal Title Section */}
                  <Dialog.Title as="div" className="bg-purple-100 shadow px-6 py-4 rounded-t-md sticky top-0 flex justify-between items-center">
                    {edit ? (
                      <h1 className="text-lg font-bold text-purple-800">Edit Project</h1>
                    ) : (
                      <h1 className="text-lg font-bold text-purple-800">Create Project</h1>
                    )}
                    <button onClick={closeModal} className="text-purple-500 hover:bg-purple-200 rounded-full p-2 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-purple-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </Dialog.Title>
  
                  {/* Modal Form Section */}
                  <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4 bg-purple-50">
                    {/* Title Input */}
                    <div>
                      <label htmlFor="title" className="block text-purple-700 font-medium">Title</label>
                      <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="border border-purple-300 rounded-md w-full text-sm py-2 px-3 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-300"
                        placeholder="Project title"
                      />
                    </div>
  
                    {/* Description Input */}
                    <div>
                      <label htmlFor="Description" className="block text-purple-700 font-medium">Description</label>
                      <textarea
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="border border-purple-300 rounded-md w-full text-sm py-2 px-3 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-300"
                        rows="6"
                        placeholder="Project description"
                      ></textarea>
                    </div>
  
                    {/* Action Buttons */}
                    <div className="flex justify-end items-center space-x-2">
                      <button type="button" onClick={closeModal} className="bg-purple-200 text-purple-700 rounded-md px-4 py-2 hover:bg-purple-300 focus:outline-none focus:ring focus:ring-purple-300">
                        Cancel
                      </button>
                      <button type="submit" className="bg-purple-600 text-white rounded-md px-4 py-2 hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-500">
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    )
}

export default memo(AddProjectModal)