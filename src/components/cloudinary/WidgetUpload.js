import React, { useEffect, useRef } from "react";

const WidgetUpload = () => {
  const cloudRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudRef.current = window.cloudinary;
    widgetRef.current = cloudRef.current?.createUploadWidget(
      {
        cloudName: "dwkckmmr7",
        uploadPreset: "dfonqvzr",
      },
      (err, result) => {
        console.log("🚀 ~ file: AdminPage.js:16 ~ useEffect ~ result:", result);
      }
    );
  }, []);
  return (
    <div>
      <button onClick={() => widgetRef.current?.open()}>Click me</button>
    </div>
  );
};

export default WidgetUpload;
