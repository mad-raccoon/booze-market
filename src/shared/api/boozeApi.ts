import { BoozeItem } from "../domains/booze";
import { BoozeItemApi } from "./boozeApi.types";

const boozeItemMapper = (boozeItem: BoozeItemApi): BoozeItem => {
  return {
    id: boozeItem.id,
    name: boozeItem.name,
    image: boozeItem.image_url,
    ph: boozeItem.ph,
    volume: boozeItem.volume.value,
    alcohol: boozeItem.srm,
  };
};

export const getBoozeList = async (): Promise<BoozeItem[]> => {
  try {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const result = await response.json();
    return result.map((item: BoozeItemApi) => boozeItemMapper(item));
  } catch (e) {
    throw e;
  }
};
