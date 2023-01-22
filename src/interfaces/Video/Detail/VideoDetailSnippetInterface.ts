import { ChannelLocalizedInterface } from "../../Channel/ChannelLocalizedInterface";
import { VideoDetailThumbnailsOptionsInterface } from "./VideoDetailThumbnailsOptionsInterface";

export interface VideoDetailSnippetInterface {
  title: string;
  description: string;
  channelId: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: VideoDetailThumbnailsOptionsInterface;
  localized: ChannelLocalizedInterface;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
}
