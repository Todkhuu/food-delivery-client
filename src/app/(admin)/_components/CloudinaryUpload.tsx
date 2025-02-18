"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

const CloudinaryUpload = () => {
  const [file, setFile] = useState<File>();
  const [image, setImage] = useState(null);

  const PRESET_NAME = "food-delivery-app";
  const CLOUDINARY_NAME = "ds6kxgjh0";

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", PRESET_NAME);
    formData.append("api_key", CLOUDINARY_NAME);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setImage(data.secure_url);
      console.log(data);
    } catch (err) {
      console.error(err);
      alert("Failed to upload file");
    }
  };
  console.log(image);

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <Input onChange={handleFile} type="file" className="w-[400px]" />
      <Button onClick={handleUpload}>Upload</Button>
      {image && (
        <div>
          <Image alt="uploaded" src={image} width={400} height={400} />
          <a href={image}>view image</a>
        </div>
      )}
    </div>
  );
};
export default CloudinaryUpload;
