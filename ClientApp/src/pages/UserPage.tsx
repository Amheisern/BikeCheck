import React, { useEffect, useState } from 'react'
// import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import { authHeader, getUser } from '../auth'
import { BicycleType, LoggedInUser, UploadResponse } from '../types'
import { useDropzone } from 'react-dropzone'
import { useMutation } from 'react-query'

export function UserPage() {
  const { id } = useParams<{ id: string }>()
  const user = getUser()
  // const history = useNavigate()

  const [isUploading, setIsUploading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [updateUser, setUpdateUser] = useState<LoggedInUser>({
    id: undefined,
    email: '',
    fullName: '',
    photoURL: '',
    bicycles: [],
  })

  const [bicycles, setBicycles] = useState<BicycleType[]>([])
  // const singleUser = LoggedInUser
  useEffect(() => {
    const loadUserDetails = () => {
      fetch(`/api/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setBicycles(data.bicycles)
        })
    }
    loadUserDetails()
  }, [id])

  async function userAvatar( updateUser: LoggedInUser) {
    const responseOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader(),
      },
      body: JSON.stringify({ photoURL: 'photoURL' }),
    }
    fetch(`/api/users/${updateUser.id}`, responseOptions)
      .then((response) => response.json())
      .then((data) => {
        setUpdateUser(data)
      })
      console.log(setUpdateUser)
  }

  // async function UserAvatar(UserAvatarSet: LoggedInUser) {
  //   const response = await fetch(`/api/users/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: authHeader(),
  //     },
  //     body: JSON.stringify(UserAvatarSet),
  //   })
  //   if (response.ok) {
  //     const data = await response.json()
  //     setUpdateUser(data.photoURL)
  //   } else {
  //     setErrorMessage('Error updating user')
  //   }
  // }

  // const createUserAvatar = useMutation(UserAvatar, {
  //   onSuccess: () => {
  //     history('/')
  //   },
  //   onError: function (apiError: APIError) {
  //     setErrorMessage(Object.values(apiError.errors).join('/'))
  //   },
  // })
  // async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
  //   createUserAvatar.mutate(updateUser)
  // }

  async function uploadFile(fileToUpload: File) {
    // Create a formData object so we can send this
    // to the API that is expecting some form data.
    const formData = new FormData()

    // Append a field that is the form upload itself
    formData.append('file', fileToUpload)

    // Use fetch to send an authorization header and
    // a body containing the form data with the file
    const response = await fetch('/api/Uploads', {
      method: 'POST',
      headers: {
        Authorization: authHeader(),
      },
      body: formData,
    })

    if (response.ok) {
      return response.json()
    } else {
      throw 'Unable to upload image!'
    }
  }

  async function onDropFile(acceptedFiles: File[]) {
    // Do something with the files
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)
    uploadFileMutation.mutate(fileToUpload)
    setIsUploading(true)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })

  const uploadFileMutation = useMutation(uploadFile, {
    onSuccess: function (apiResponse: UploadResponse) {
      const url = apiResponse.url

      setUpdateUser({ ...updateUser, photoURL: url })
    },

    onError: function (error: string) {
      setErrorMessage(error)
    },

    onSettled: function () {
      setIsUploading(false)
    },
  })
  let dropZoneMessage = 'Drag a picture of the user here to upload!'
  if (isUploading) {
    dropZoneMessage = 'Uploading...'
  }
  if (isDragActive) {
    dropZoneMessage = 'Drop the files here ...'
  }
 
  return (
    <div>
      <h1 className="UserStableName">{user.fullName} stable</h1>
      <form onSubmit={() =>userAvatar} className="UserAvatarSubmit">
        {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
        <div className="file-drop-zone">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {dropZoneMessage}
          </div>
        </div>
        <div className="file-drop-zone-preview">
          {updateUser.photoURL ? (
            <p>
              <img alt="User Photo" width={100} src={updateUser.photoURL} />
            </p>
          ) : null}
        </div>
        <button id="submit" name="submit" className="btn btn-success">
          Submit
        </button>
      </form>
      <article>
        {bicycles.map((bicycle) => (
          <div key={bicycle.id}>
            <Link to={`/bicycles/${bicycle.id}`}>
              <h2>{bicycle.title}</h2>
              <img width={300} src={bicycle.photoURL} alt={bicycle.title} />
            </Link>
          </div>
        ))}
      </article>
    </div>
  )
}
