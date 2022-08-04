import missing from "../images/generic_image.jpeg";

interface PostImageProps {
  url: string;
  className: string;
}

export default function PostImage({ url, className }: PostImageProps) {
  return (
    <img
      className={className}
      src={url}
      alt="city"
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = missing;
      }}
    />
  );
}
