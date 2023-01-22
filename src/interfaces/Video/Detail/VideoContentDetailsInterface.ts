import { VideoDetailRegionRestrictionInterface } from "./VideoDetailRegionRestrictionInterface";

export interface VideoContentDetailsInterface {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  regionRestriction: VideoDetailRegionRestrictionInterface;
  contentRating: null | undefined;
  projection: string;
}
