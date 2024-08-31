import type { WP_REST_API_Attachment } from "wp-types";

export type PostType = WP_REST_API_Attachment & {
  acf: {
    canonical_field: string;
    meta_title_field: string;
    meta_desc_field: string;
    nofollow_field: boolean;
    noindex_field: boolean;
    og_image_field: string;
    og_url_field: string;
    lp_fv: number;
    lp_feature: {
      lp_feature_title: string;
      lp_feature_desc: string;
      lp_feature_img: number;
    }[];
    lp_faq: {
      lp_faq_question: string;
      lp_faq_answer: string;
    }[];
    lp_cta: {
      target?: string;
      title: string;
      url: string;
    };
  };
  slug: string;
};
