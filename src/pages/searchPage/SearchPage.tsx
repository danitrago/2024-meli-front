import imgOne from "@/assets/mama.webp";
import imgTwo from "@/assets/electro.webp";
import imgThree from "@/assets/envios.webp";
import { Slider } from "@/components/slider";
import { Layout } from "@/layout";
import { useEffect } from "react";

const SearchPage = () => {
  useEffect(() => {
    const searchBox = document.getElementsByName(
      "search"
    )[0] as HTMLInputElement;
    searchBox.focus();
  }, []);

  return (
    <Layout>
      <Slider>
        <img src={imgOne} alt="Banner" style={{ width: "100%" }} />
        <img src={imgTwo} alt="Banner" style={{ width: "100%" }} />
        <img src={imgThree} alt="Banner" style={{ width: "100%" }} />
      </Slider>
    </Layout>
  );
};

export default SearchPage;
