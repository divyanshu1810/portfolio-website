import { spotify } from "@/utils/keywords";
export const Spotify = () => {
  return (
    <div className="lg:mx-80 md:mx-36 mt-10">
      <iframe
        style={{ borderRadius: 12 }}
        src={spotify}
        width={"100%"}
        height={400}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;
