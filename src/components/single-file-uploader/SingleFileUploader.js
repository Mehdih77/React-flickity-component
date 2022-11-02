import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
// import config from "../../../services/config.json";
import { ReactComponent as DefaultUploader } from "assets/images/icons/default-uploader.svg";
import { ReactComponent as CameraIcon } from "assets/images/icons/camera.svg";
import PropTypes from "prop-types";
import styles from "./SingleFileUploader.module.scss";

// can handle title and defaultImg if it use commenly

export default function SingleFileUploader({ imageState }) {
  const [image, setImage] = imageState;
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    // const hadImage = image && image.length ? `${config.imageApi}${image}` : "";
    const hadImage = image && image.length ? `` : "";
    setSelectedImage(hadImage);
  }, [image]);

  const onDropAccepted = useCallback((acceptedFiles) => {
    setImage(acceptedFiles);
    const file = acceptedFiles[0];
    const fileReader = new FileReader();
    fileReader.addEventListener(
      "load",
      () => {
        setSelectedImage(fileReader.result);
      },
      false
    );

    fileReader.readAsDataURL(file);
  }, []);

  const onDropRejected = (rejectedFiles) => {
    toast.error("شما فقط می توانید از فرمت های PNG و JPG استفاده کنید");
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    maxFiles: 1,
    onDropAccepted,
    onDropRejected,
    noDrag: true,
  });

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {selectedImage.length ? (
          <img src={selectedImage} alt="" className={styles.previewImage} />
        ) : (
          <div className={styles.previewImage}>
            <DefaultUploader />
          </div>
        )}

        <div
          {...getRootProps({
            className: styles.dropZone,
          })}>
          <input {...getInputProps()} />
          <CameraIcon />
        </div>
      </div>
    </section>
  );
}

SingleFileUploader.propTypes = {
  images: PropTypes.func,
};
