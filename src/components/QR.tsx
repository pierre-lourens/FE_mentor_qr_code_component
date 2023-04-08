const QR = ({ imageUrl }: { imageUrl: string }) => {
  console.log({ imageUrl });
  return <img src={imageUrl} className="w-full h-full rounded-lg" alt="qr-code"></img>;
};

export default QR;
