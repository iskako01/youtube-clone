import { ThumbnailsOptionsInterface } from "../Video/ThumbnailsOptionsInterface";
import { ChannelLocalizedInterface } from "./ChannelLocalizedInterface";

export interface ChannelSnippetInterface {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: ThumbnailsOptionsInterface;
  localized: ChannelLocalizedInterface;
}
