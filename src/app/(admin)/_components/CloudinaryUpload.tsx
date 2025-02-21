"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { FileImage } from "lucide-react";

const CloudinaryUpload = () => {
  const [file, setFile] = useState<File>();
  const [image, setImage] = useState("");

  const PRESET_NAME = "food-delivery-app";
  const CLOUDINARY_NAME = "ds6kxgjh0";

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    if (file) {
      setFile(file);
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
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
    <label htmlFor="file-input">
      {/* <Button onClick={handleUpload}>Upload</Button> */}
      {image ? (
        <div>
          <Image
            alt="uploaded"
            src={image}
            width={1000}
            height={1000}
            className="w-[100%] h-[138px] object-cover object-center rounded-md"
          />
        </div>
      ) : (
        <div>
          <div className="h-[138px] border-[1px] rounded-md flex flex-col justify-center items-center">
            <FileImage className="stroke-[#71717a] w-[18px] h-[18px]" />
            <p className="text-[#71717a] text-[14px]">Add image</p>
          </div>
        </div>
      )}
      <Input
        id="file-input"
        onChange={handleFile}
        type="file"
        className="w-[400px] hidden"
      />
    </label>
  );
};
export default CloudinaryUpload;
