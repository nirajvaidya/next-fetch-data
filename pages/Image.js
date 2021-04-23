import Image from "next/image";
function ImageData() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="/images/posts/1.jpeg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <p>Welcome to my homepage!</p>
    </>
  );
}

export default ImageData;
