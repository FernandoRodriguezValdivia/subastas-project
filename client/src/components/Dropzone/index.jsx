/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  width: "280px",
  height: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#00e676",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "copy",
  textAlign: "center",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const Dropzone = () => {
  const [files, setFiles] = useState([]);
  const [select, setSelect] = useState();
  const onDrop = useCallback(
    (acceptedfiles) => {
      setFiles((state) =>
        state.concat(
          acceptedfiles.map((file, id) => {
            if (id === acceptedfiles.length - 1) {
              setSelect(
                Object.assign(file, {
                  preview: URL.createObjectURL(file),
                }),
              );
            }
            return Object.assign(file, {
              preview: URL.createObjectURL(file),
            });
          }),
        ),
      );
      console.log(files);
    },
    [files],
  );

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ onDrop, accept: { "image/*": [] } });
  const selectedImages = files?.map((file, id) => (
    <div key={id} onClick={() => setSelect(files[id])}>
      <img
        src={file.preview}
        style={{ width: "64px", height: "64px", cursor: "pointer" }}
        alt="h"
      />
    </div>
  ));

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "300px",
          border: "1px solid black",
          marginBottom: "10px",
        }}
      >
        {select && (
          <div>
            <img
              src={select.preview}
              style={{ width: "300px", height: "300px" }}
              alt="h"
            />
          </div>
        )}
      </div>
      <div style={{ display: "flex", gap: "12px", height: "64px" }}>
        {selectedImages}
      </div>
      <div>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p style={{ margin: 0 }}>Subir imagen</p>
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
