import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "2023 SCATA-STA Speaker Exchange: Las Vegas",
    paragraph:
      "James Selby reports on his experience of the SCATA-STA Speaker Exchange Programme.",
    image: "/images/blog/destination-1853477_1280.jpg",
    author: {
      name: "James Selby",
      image: "/images/blog/author-js.png",
      designation: "SCATA Member",
    },
    tags: ["Speaker Exchange"],
    publishDate: "Feb 2023",
  },
  {
    id: 2,
    title: "Obituary: Remembering Dr Andrew Norton",
    paragraph:
      "SCATA remembers Dr Andrew Norton, who sadly passed away in May 2022.",
    image: "/images/blog/andrewnorton.png",
    author: {
      name: "Grant Forrest",
      image: "/images/blog/author-gf.png",
      designation: "SCATA President",
    },
    tags: ["Obituary"],
    publishDate: "June 2022",
  },
  {
    id: 3,
    title: "Obituary: Remembering Dr Alastair Lack",
    paragraph:
      "SCATA remembers Dr Alastair Lack, who sadly passed away in March 2022.",
    image: "/images/blog/alastairlack.png",
    author: {
      name: "Grant Forrest",
      image: "/images/blog/author-gf.png",
      designation: "SCATA President",
    },
    tags: ["Obituary"],
    publishDate: "May 2022",
  },
];
export default blogData;
