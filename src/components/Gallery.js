import GalleryItem from "./GalleryItem";
const galleryImages = [
  {
    id: 1,
    src: "https://media.istockphoto.com/id/926629376/it/foto/vecchio-treno-a-vapore.jpg?s=612x612&w=0&k=20&c=MqO2OHdEtKN0XOvwqNupSWll0yA80CqynbMTjljJ3PI=",
    title: `90's Train`,
    category: "train",
  },
  {
    id: 2,
    src: "https://media.istockphoto.com/id/488390679/photo/old-tv.jpg?s=612x612&w=0&k=20&c=AN2v5Yjhs1bpLq-911vnyNOb9r7lPUmbOCdIacX7ifQ=",
    title: `90's TV`,
    category: "TV",
  },
  {
    id: 3,
    src: "https://media.istockphoto.com/id/1446466484/it/foto/1990-donne-cinesi-vecchia-foto-della-vita-reale.jpg?s=612x612&w=0&k=20&c=lZk8DIcolBc_gQCUHQ9iJNYIZFWx_5CZV6TljES2LeY=",
    title: `90's fashion design`,
    category: "fashion designer",
  },
  {
    id: 4,
    src: "https://media.istockphoto.com/id/1275297422/it/foto/messaggi-misti.jpg?s=612x612&w=0&k=20&c=80yrlPyqEgQQ_osi4nrLyuj0MGjrOadpeHVAALpf3rc=",
    title: `90's Telephone`,
    category: "telephone",
  },
];

const Gallery = () => {
  return (
    <div className="gallery ">
      <h2 className="feature-title gallery-title">Gallery</h2>
      <div className="gallery-wrapper">
     {galleryImages.map((image)=>[
      <GalleryItem key={image.id} image={image}/>
     ])}
      </div>
    </div>
  );
};

export default Gallery;
