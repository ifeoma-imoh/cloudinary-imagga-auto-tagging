import Gallery from "./components/Gallery";
import ImageUpload from "./components/ImageUpload";

const routes = [
  {
    path: "/",
    element: <ImageUpload />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
];

export default routes;
