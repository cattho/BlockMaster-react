const cloudUrl = "https://api.cloudinary.com/v1_1/dfp8qduho/image/upload";

//esta funcion carga la imagen una vez se pone en el formulario para enviar el url de la imagen al servidor
export const fileUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "block_Master");

  try {
    const data = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    if (data.ok) {
      const cloudResp = await data.json();
      return cloudResp.secure_url;
    } else {
      throw await data.json();
    }
  } catch (error) {
    console.error("No se ha podido cargar correctamente el archivo de imagen");
  }
};
