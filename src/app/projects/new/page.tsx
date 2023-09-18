'use client';

import { Project, ProjectStatus } from "../types";
import Link from "next/link";
import classNames from "@/app/utils/classNames";
import { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useState } from 'react';
import Axios from "axios";

export default function CreateProject() {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [file, setFile] = useState(null as null | File)
  let [previewURL, setPreviewURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/74/White_Cliffs_of_Dover_02.JPG");

  const _handleImageChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    let reader: FileReader = new FileReader();
    let infile: File | null = (e.target.files?.[0] ?? null); 

    reader.onload = () => {
      setFile(infile);
      setPreviewURL(reader.result as string);
    }
    infile !== null ? reader.readAsDataURL(infile) : null;
}

  const _handleSubmit: FormEventHandler<HTMLFormElement> = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(previewURL)
    let res = await Axios.post("/projects/api/", {
      name: name,
      description: description,
      status: "Inactive",
      base64data:previewURL,
      type:(file?.type ?? null)
    })
      .catch((err) => {
        console.log(err);
      })
  };
  let $imagePreview = null;
  if (previewURL) {
    $imagePreview = (<img className="h-24 w-24" style={{ borderRadius: "100%", overflow: "hidden", backgroundColor: "white" }} src={previewURL} />);
  } else {
    $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
  }

  return (
    <form onSubmit={_handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="projectname" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    value={name}
                    placeholder="myProject"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  value={description}
                  placeholder="myProject"
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  rows={3}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your project.</p>
            </div>
            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Project Logo Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <div>
                  <div>
                    {$imagePreview}
                  </div>
                </div>
                <input
                  type="file"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onChange={_handleImageChange}
                >
                </input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>

  )
}
