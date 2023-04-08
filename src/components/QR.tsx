const QR = ({ imageUrl }: { imageUrl: string }) => {
  console.log({ imageUrl });
  return <img src={imageUrl}></img>;
};

export default QR;
