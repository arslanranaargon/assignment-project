// ChakraFileUpload.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { Control, Controller, FieldValues } from "react-hook-form";

interface ChakraFileUploadProps<T> {
  control: Control<T>;
  name: string;
  setPreviewUrl: any;
  previewUrl: any;
}

const ChakraFileUpload = <T,>({
  control,
  name,
  setPreviewUrl,
  previewUrl,
}: ChakraFileUploadProps<T>) => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: File | null) => void
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onChange(file);

      // Create an object URL for the selected image file
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    } else {
      setFileName("");
      onChange(null);
      setPreviewUrl(null);
    }
  };

  return (
    <Box width="300px" mt={4}>
      <FormControl>
        <FormLabel htmlFor="file">Upload a file</FormLabel>
        <Controller
          name={name}
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <Input
              type="file"
              id="file"
              onChange={(event) => handleFileChange(event, field.onChange)}
              style={{ display: "none" }}
            />
          )}
        />
        <Button onClick={() => document.getElementById("file")?.click()}>
          Choose File
        </Button>
        {fileName && (
          <Text mt={2} fontSize="sm">
            {fileName}
          </Text>
        )}
      </FormControl>
      {previewUrl && (
        <Box mt={4}>
          <Image src={previewUrl} alt="Preview" maxW="300px" />
        </Box>
      )}
    </Box>
  );
};

export default ChakraFileUpload;
