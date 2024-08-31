import type { WP_REST_API_Attachment } from "wp-types";

/**
 * Constans
 */
import { host } from '@/constants/wp';

export const fetchImg = async (imgID: number) => {
  const res = await fetch(`${host}/wp-json/wp/v2/media/${imgID}/`);
  const data: WP_REST_API_Attachment = await res.json();
  return {
    file: data.media_details.file,
    width: data.media_details.width,
    height: data.media_details.height,
    alt: data.alt_text,
  };
};
