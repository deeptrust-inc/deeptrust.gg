import FileUploadInput from "./file-upload";

// TODO: Introduce different forms of input, like url
const AudioInput = () => (
  <div className="border-r bg-gray-600/40 dark:bg-gray-800/40 rounded-lg shadow-lg">
    <div className="flex flex-col gap-4 p-4">
      <h1 className="font-semibold text-lg md:text-2xl">Speech Input</h1>
      <FileUploadInput />
    </div>
  </div>
);

export default AudioInput;
