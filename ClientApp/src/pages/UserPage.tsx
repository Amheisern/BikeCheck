import React, { useEffect, useState } from 'react'
// import { useQuery } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { authHeader, getUser } from '../auth'
import { APIError, BicycleType, LoggedInUser, UploadResponse } from '../types'
import { useDropzone } from 'react-dropzone'
import { useMutation } from 'react-query'
// import { bicycleImageOnErrorHandler } from '../components/defaultImageLoading'

export function UserPage() {
  const { id } = useParams<{ id: string }>()
  const user = getUser()
 const history = useNavigate()

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

  async function submitEditedUserPhoto(UserToUpdate: LoggedInUser) {
    const response = await fetch(`/api/users/${UserToUpdate.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader(),
      },
      body: JSON.stringify(UserToUpdate),
    })
    const data = await response.json()
    if (response.ok) {
      setUpdateUser(data)
    }
  }
  // async function loadUserDetails() {
  //   const response = await fetch(`/api/users/${id}`)
  //   if (response.ok) {
  //     return response.json()
  //   } else {
  //     throw await response.json()
  //   }
  // }

const editUserPhoto = useMutation(submitEditedUserPhoto, {
  onSuccess: () => {
    history('/')
  },
  onError: function (apiError: APIError) {
    setErrorMessage(Object.values(apiError.errors).join('/'))
  },
})

async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
  editUserPhoto.mutate(updateUser)
}

function handleFormChange(
  event: React.ChangeEvent<HTMLInputElement>
)
{const value = event.target.value
const fieldName = event.target.name
const updatedUser = { ...updateUser, [fieldName]: value }
setUpdateUser(updatedUser)
}

  // async function userAvatar( updateUser: LoggedInUser) {
  //   const responseOptions = {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: authHeader(),
  //     },
  //     body: JSON.stringify({ photoURL: 'photoURL' }),
  //   }
  //   fetch(`/api/users/${updateUser.id}`, responseOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUpdateUser(data)
  //     })
  //     console.log(setUpdateUser)
  // }

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
  let dropZoneMessage = 'Drag a user pic here'
  if (isUploading) {
    dropZoneMessage = 'Uploading...'
  }
  if (isDragActive) {
    dropZoneMessage = 'Drop the files here ...'
  }
 
  return (
    <div>
      <div className="userContainer">
      <h1 className="userStableName">{user.fullName} stable</h1>
      <form onSubmit={handleFormSubmit} className="userAvatarSubmit">
        {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
        <div className="file-drop-zone">
          <div {...getRootProps()}>
            <input name="photoURL" className="dragNDrop" value={updateUser.photoURL} onChange={handleFormChange}{...getInputProps()} />
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
      </div>
      <hr></hr>
          <Link to="/add"><button className="AddBicycleButton">Add Bicycle</button></Link>
      <section>
        {bicycles.map((bicycle) => (
          <div key={bicycle.id}>
            <Link to={`/bicycles/${bicycle.id}`}>
              <article className="bicycleCard">
              <img
                width={300}
                src={bicycle.photoURL}
                className="user-page-bikes"
                alt={bicycle.title}
                />
                <h2>{bicycle.title}</h2>
              </article>
            </Link>
          </div>
        ))}
      </section>
    </div>
  )
}
