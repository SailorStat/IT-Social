const imageBlobCreator = (event) => {
  const formData = new FormData()
  formData.append("image", event.target.files[0])
  return formData
}

export default imageBlobCreator 