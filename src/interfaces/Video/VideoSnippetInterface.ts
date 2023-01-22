import { ThumbnailsOptionsInterface } from "./ThumbnailsOptionsInterface";

export interface VideoSnippetInterface {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: ThumbnailsOptionsInterface;
  title: string;
}
